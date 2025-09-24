export function loadContacts() {
    const content = document.getElementById('content');
    const header = document.querySelector('header');

    const oldHeadline = header.querySelector('h1');
    if (oldHeadline) {
        header.removeChild(oldHeadline);
    }

    const headline = document.createElement('h1');
    headline.textContent = "Contacts";


    header.appendChild(headline);
}