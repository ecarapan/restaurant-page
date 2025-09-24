export function loadMenu() {
    const content = document.getElementById('content');
    const header = document.querySelector('header');

    const oldHeadline = header.querySelector('h1');
    if (oldHeadline) {
        header.removeChild(oldHeadline);
    }

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('menu-container')

    const headline = document.createElement('h1');
    headline.textContent = "Menu";

    const ciorbaDiv = document.createElement('div');
    ciorbaDiv.classList.add('ciorba');

    const sarmaleDiv = document.createElement('div');
    sarmaleDiv.classList.add('sarmale');

    const miciDiv = document.createElement('div');
    miciDiv.classList.add('mici');

    const papanasiDiv = document.createElement('div');
    papanasiDiv.classList.add('papanasi');

    header.appendChild(headline);
    content.appendChild(containerDiv);
    containerDiv.appendChild(ciorbaDiv);
    containerDiv.appendChild(sarmaleDiv);
    containerDiv.appendChild(miciDiv);
    containerDiv.appendChild(papanasiDiv);
}