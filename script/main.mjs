import Email from '/script/_email.mjs';

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