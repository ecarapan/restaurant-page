import "./styles.css"
import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadContacts } from './contacts';

function clearContent() {
    document.getElementById('content').innerHTML = '';
}

document.getElementById('home-btn').addEventListener('click', () => {
    clearContent();
    loadHome();
});

document.getElementById('menu-btn').addEventListener('click', () => {
    clearContent();
    loadMenu();
});

document.getElementById('contacts-btn').addEventListener('click', () => {
    clearContent();
    loadContacts();
});

loadHome();