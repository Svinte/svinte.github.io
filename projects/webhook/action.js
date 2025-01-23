document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');

    function scanURL() {
        const url = window.location.href;

        if (url.includes('#users')) {
            pages.forEach(page => {
                page.classList.add('hidden');
            });

            document.querySelector('.page#users').classList.remove('hidden');
        }
        else if (url.includes('#dev')) {
            pages.forEach(page => {
                page.classList.add('hidden');
            });

            document.querySelector('.page#dev').classList.remove('hidden');
        }
        else {
            window.location.href = '#users';
        }
    }

    scanURL();

    window.addEventListener('hashchange', () => {
        scanURL();
    });
});