import { onMounted, onBeforeUnmount } from "vue";

export function useScrollFocus() {
    let rafId: number | null = null;
    let observer: IntersectionObserver | null = null;
    let resizeHandler: (() => void) | null = null;

    function clamp(v: number, a = 0, b = 1) {
        return Math.max(a, Math.min(b, v));
    }

    function updateFocus(els: Element[]) {
        if (!els.length) return;

        const vh = window.innerHeight;
        const mid = vh / 2;

        els.forEach((el) => {
        const r = el.getBoundingClientRect();

        if (r.height === 0 && r.width === 0) {
            (el as HTMLElement).style.setProperty("--focus", "0");
            return;
        }

        const center = r.top + r.height / 2;
        const dist = Math.abs(center - mid);
        const normalized = clamp(1 - dist / mid);
        const eased = Math.sin((normalized * Math.PI) / 2);

        (el as HTMLElement).style.setProperty("--focus", String(eased));
        });

        rafId = requestAnimationFrame(() => updateFocus(els));
    }

    onMounted(() => {
        const reduced =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const els = Array.from(
        document.querySelectorAll(".scroll-animate")
        );

        if (reduced) {
        els.forEach((el) => {
            el.classList.add("in-view");
            (el as HTMLElement).style.setProperty("--focus", "1");
        });
        return;
        }

        observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer?.unobserve(entry.target);
            }
            });
        },
        { threshold: 0.15 }
        );

        els.forEach((el) => observer?.observe(el));
        updateFocus(els);

        resizeHandler = () => {
        if (rafId) cancelAnimationFrame(rafId);
        updateFocus(els);
        };

        window.addEventListener("resize", resizeHandler);
        window.addEventListener("orientationchange", resizeHandler);
    });

    onBeforeUnmount(() => {
        if (observer) {
        try {
            observer.disconnect();
        } catch (e) {}
        observer = null;
        }

        if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
        }

        if (resizeHandler) {
        window.removeEventListener("resize", resizeHandler);
        window.removeEventListener("orientationchange", resizeHandler);
        resizeHandler = null;
        }
    });
}
