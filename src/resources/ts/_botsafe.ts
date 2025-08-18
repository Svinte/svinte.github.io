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

    // Add reassembler event listener to link.
    botsafeElements.forEach((element) => {
        if (!(element instanceof HTMLAnchorElement)) return;

        const reassembleOn = element.getAttribute("data-reassemble-on");

        if (reassembleOn === 'load') {
            reassemble.call(element, new Event('synthetic'));

            return;
        }

        if (reassembleOn) {
            element.dataset.botsafeEvent = reassembleOn;
            element.addEventListener(reassembleOn, reassemble);
        }
    })
}

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
document.addEventListener("DOMContentLoaded", botsafeInit);
