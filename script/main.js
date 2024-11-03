import Email from '/script/email.js';

/**
 * Website core script features
 */
function main()
{
    const emailLinks = document.querySelectorAll('.script_email')

    emailLinks.forEach(link => {
        new Email(link);
    });
}

main();
