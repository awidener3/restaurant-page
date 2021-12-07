import './style.css';
import restaurantImage from './restaurant-image.jpeg';

const createHome = () => {
    const home = document.createElement('div');
    home.classList.add('home');

    // handle description
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description-container');

    const descriptionHead = document.createElement('h2');
    descriptionHead.innerText = 'Bidet!'
    
    const description = document.createElement('p');
    description.innerText = 
        
        `Welcome to Grog's! This 200 year old converted house of a wealthyman now houses one of the best pubs Emon has to offer! 
        
        Enjoy the finest of the city with performances every night from local bards. Famous for our 'Strongjaw Socker' mead and 'Vax Bites', there is something here for everyone!`;

    descriptionContainer.appendChild(descriptionHead);
    descriptionContainer.appendChild(description);

    home.appendChild(descriptionContainer);
    
    // handle image
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    
    const image = new Image();
    image.src = restaurantImage;
    image.classList.add('home-image');
    imageContainer.appendChild(image);

    home.appendChild(imageContainer);

    // hours of operation
    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('hours-container');
    
    const hoursHead = document.createElement('h3');
    hoursHead.innerText = 'Hours of Operation';
    hoursHead.classList.add('hours-head');
    hoursContainer.appendChild(hoursHead);

    const hoursText = document.createElement('p');
    hoursText.classList.add('hours-text');
    hoursText.innerText = 
        `Miresen: Closed
        Grissen: 8:00am - 12:00am
        Whelsen: 8:00am - 12:00am
        Conthsen: 8:00am - 12:00am
        Folsen: 8:00am - 12:00am
        Yulisen: 8:00am - 12:00am
        Da'leysen: Closed`;
    hoursContainer.appendChild(hoursText);

    home.appendChild(hoursContainer);

    // reviews
    const reviewContainer = document.createElement('div');
    reviewContainer.classList.add('review-container');

    const review = document.createElement('p');
    review.classList.add('review-text');
    review.innerText = 
        `"Dare I say that Grog's is one of the best establishment's I have ever visited in Emon! Totally better than that other place, the Diamond's Nest Tavern, YUCK!"`;
    reviewContainer.appendChild(review);

    const reviewAuthor = document.createElement('p');
    reviewAuthor.classList.add('review-author');
    reviewAuthor.innerText = 
        `- The Grand Poobah...`;
    reviewContainer.appendChild(reviewAuthor);
    
    home.appendChild(reviewContainer);
    
    return home
}

function printHome() {
    const main = document.getElementById('main');
    const homeBtn = document.getElementsByClassName('home-btn')[0];

    homeBtn.classList.add('active');
    main.appendChild(createHome());
    
}

export default printHome;