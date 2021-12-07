import printHome from './home.js';
import printContact from './contact.js';
import printMenu from './menu.js';

const createHeader = () => {
    const header = document.createElement('div');
    header.classList.add('header-container');
    header.setAttribute('id', 'header');
    
    const title = document.createElement('h1');
    title.classList.add('header-title');
    title.textContent = '☙ GROG\'S ❧';
    
    const subtitle = document.createElement('h3');
    subtitle.innerText = 'Since 1994';
    subtitle.classList.add('header-subtitle');

    header.appendChild(title);
    header.appendChild(subtitle);
    header.appendChild(createNav());

    return header;
}

const createNav = () => {
    const nav = document.createElement('nav');
    nav.classList.add('nav-bar');

    nav.appendChild(createButton('home'));
    nav.appendChild(createButton('menu'));
    nav.appendChild(createButton('contact'));

    return nav;
}

const createButton = (buttonName) => {
    const button = document.createElement('button');
    const buttonDisplay = buttonName.toUpperCase();
    button.innerText = buttonDisplay;
    button.classList.add('nav-btn');
    button.classList.add(`${buttonName}-btn`);
    button.onclick = function() {
        handlePageSwitch(this);
    };

    return button;
}

function handlePageSwitch(button) {

    const buttonName = button.textContent.toLowerCase();

    if (buttonName == 'contact') {
        clearPage();
        printContact();    
    }

    if (buttonName == 'home') {
        clearPage();
        printHome();
    }

    if (buttonName == 'menu') {
        clearPage();
        printMenu();
    }
}

const clearPage = () => {
    const navButtons = document.getElementsByClassName('nav-btn');
    const main = document.getElementById('main');
    
    main.textContent = '';
    
    for (let i = 0; i < navButtons.length; i++) {
        navButtons[i].classList.remove('active');
    }
}

const createMain = () => {
    const main = document.createElement('div');
    main.setAttribute('id', 'main');

    return main;
}

const createFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.textContent = 'Copyright © 2021 awidener3';

    return footer;
}

const loadWebsite = () => {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    printHome();
}

export default loadWebsite;