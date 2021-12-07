import './style.css';
import Grog from './grog.png';
import Scanlan from './scanlan.png';
import Pike from './pike.png'

function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const header = document.createElement('h2');
    header.textContent = 'CONTACT';
    header.classList.add('page-title');

    
    contact.appendChild(header);
    contact.appendChild(createCard('Grog', 'Chef', '123-4567', 'grog@grogs.exu', Grog));
    contact.appendChild(createCard('Scanlan', 'Waiter', '098-7654', 'meatman@grogs.exu', Scanlan));
    contact.appendChild(createCard('Pike', 'Bouncer', '504-5423', 'pike@grogs.exu', Pike));

    return contact;
}

function createCard(employeeName, jobTitle, phoneNumber, emailAddress, imageName) {
    // create card div
    const card = document.createElement('div');
    card.classList.add('contact-card');

    // div inside of card for contact info
    const info = document.createElement('div');
    info.classList.add('contact-card-info')

        // info - name
        const name = document.createElement('h2');
        name.textContent = employeeName;
        info.appendChild(name);

        // info - job
        const job = document.createElement('p');
        job.textContent = jobTitle;
        info.appendChild(job);

        // info - phone
        const phone = document.createElement('p');
        phone.textContent = phoneNumber;
        info.appendChild(phone);

        // info - email
        const email = document.createElement('p');
        email.textContent = emailAddress;
        info.appendChild(email);
    
    // add info to card
    card.appendChild(info);

    // create headshot image
    const image = new Image();
    image.src = imageName;
    image.classList.add('card-image');
    card.appendChild(image);

    return card;

}

function printContact() {
    const main = document.getElementById('main');
    const contactBtn = document.getElementsByClassName('contact-btn')[0];

    contactBtn.classList.add('active');

    main.appendChild(createContact());
}

export default printContact;