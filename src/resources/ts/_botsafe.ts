/**
 * Checks if string is phone number.
 *
 * @param text String
 * @returns Is phone number.
 */
function isPhoneNumber(text: string): boolean {
    const phoneRegex =/^\+?[0-9\s]{7,}$/;

    return phoneRegex.test(text);
}

/**
 * Checks if string is email.
 *
 * @param text String
 * @returns Is email.
 */
function isEmail(text: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(text);
}


/**
 * Set event listeners for links.
 */
function botsafeInit(): void {
    const botsafeElements = document.querySelectorAll(".botsafe");
    initializeElements(botsafeElements);
}

/**
 * Initialize Botsafe elements with event listeners
 */
function initializeElements(elements: NodeListOf<Element>): void {
    elements.forEach((element) => {
        if (!(element instanceof HTMLAnchorElement)) return;

        // Skip if already initialized
        if (element.hasAttribute('data-botsafe-initialized')) return;
        element.setAttribute('data-botsafe-initialized', 'true');

        const reassembleOn = element.getAttribute("data-reassemble-on");

        if (reassembleOn === 'load') {
            reassemble.call(element, new Event('synthetic'));
            return;
        }

        if (reassembleOn) {
            element.dataset.botsafeEvent = reassembleOn;
            element.addEventListener(reassembleOn, reassemble);
        }
    });
}

// Create MutationObserver to watch for new elements
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            const newBotsafeElements = document.querySelectorAll(".botsafe:not([data-botsafe-initialized])");
            if (newBotsafeElements.length > 0) {
                initializeElements(newBotsafeElements);
            }
        }
    });
});

/**
 * Reassemble link content.
 */
function reassemble(this: HTMLElement, event: Event): void {
    if(event.type !== 'synthetic')
    {
        event.preventDefault();
    }

    const rawData = this.getAttribute("data-botsafe") || "[]";
    const array = JSON.parse(rawData) as string[];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0 || i % 5 === 0) {
            array[i] = '';
        }
    }

    const text = array.join("").trim();

    const linkElement = this as HTMLAnchorElement;

    if (isPhoneNumber(text)) {
        linkElement.href = `tel:${text}`;
        linkElement.innerText = text;
    } else if (isEmail(text)) {
        linkElement.href = `mailto:${text}`;
        linkElement.innerText = text;
    } else {
        linkElement.innerText = text;
    }

    const eventType = this.dataset.botsafeEvent;
    if (eventType) {
        this.removeEventListener(eventType, reassemble);
        delete this.dataset.botsafeEvent;
    }

    this.removeAttribute("data-botsafe");
    this.removeAttribute("data-reassemble-on");
}

// Run when DOM loaded.
document.addEventListener("DOMContentLoaded", () => {
    botsafeInit();
    
    // Start observing the entire document for changes
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
