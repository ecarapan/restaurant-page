export function loadHome() {
    const content = document.getElementById('content');
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to My Restaurant!";
    const description = document.createElement('p');
    description.textContent = "Best food in town!";
  

    const image = document.createElement('img');
    image.src = 'https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg';

    content.appendChild(headline);
    content.appendChild(description);
    content.appendChild(image);

}