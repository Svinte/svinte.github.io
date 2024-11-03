/**
 * Email extension for safe way to show email on website. Prevents mail fishing from website.
 * @param {HTMLLinkElement} linkElement - link where safe email wanted to be shown in
 * @returns {Object} Email - Email object
*/
export default class Email
{
    constructor(linkElement)
    {
        this.target = linkElement;

        Object.defineProperty(this, 'TEXT', {
            configurable: false,
            writable: false,
            value: 'kokkoniemi' + 'svante' + '@' + 'gmail' + '.com',
        })

        Object.defineProperty(this, 'HREF', {
            configurable: false,
            writable: false,
            value: 'mailto' + '://kokkoni' + 'emisvante' + '@' + 'gmail' + '.com',
        })

        linkElement.addEventListener('click', this.show.bind(this));
    }

    /**
     * Show email on link
     */
    show(e)
    {        
        const target = this.target;

        if(e.target.hasAttribute('script_email--open'))
        {            
            e.preventDefault();

            target.removeAttribute('script_email--open');
            
            target.innerText = this.TEXT;
            target.href = this.HREF;
        }
    }
}
