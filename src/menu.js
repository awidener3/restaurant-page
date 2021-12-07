import './style.css';

const createMenu = () => {

    const menu = document.createElement('div');
    menu.classList.add('menu');
    
    const header = document.createElement('h2');
    header.innerText = 'MENU';
    header.classList.add('page-title');
    menu.appendChild(header);
    
    // starters
    menu.appendChild(createMenuCategory('Starters'));

    menu.appendChild(createMenuItem('Loaded Lettuce Bowls', 'A platter of lettuce bowls loaded with a concoction of cheese, herbs and bacon.', '4 sp, 2 cp'));
    menu.appendChild(createMenuItem('Cheese Platter', 'A plate of cheddar cheese with crackers.', '2 sp, 2 cp'));
    menu.appendChild(createMenuItem('Crammed Potato Skins', 'A platter of potato skins crammed with a fusion of herbs and potato.', '2 sp, 2 cp'));
    
    // soups & salads
    menu.appendChild(createMenuCategory('Soups & Salads'));

    menu.appendChild(createMenuItem('Scallop Soup', 'A rich soup with scallops, cubed potatoes, garlic, and celery.', '3 sp, 5 cp'));
    menu.appendChild(createMenuItem('Frog Soup', 'A savory soup with frog meatballs, dumplings, and garlic.', '3 sp, 7 cp'));
    menu.appendChild(createMenuItem('Iceberg Salad', 'Leaves of iceberg tossed with baby artichokes and radishes', '3 sp, 4 cp'));
    menu.appendChild(createMenuItem('Blackened Ham and Romaine Salad', 'Leaves of romaine coated in a lemon herb dressing and tossed with celery. Topped with blackened ham and cranberries', '3 sp, 5 cp'));

    // entrees
    menu.appendChild(createMenuCategory('Entrees'));

    menu.appendChild(createMenuItem('Grilled Duck', 'Grilled chunks of duck in a thick gravy alongside pasta and cabbage.', '7 sp'));
    menu.appendChild(createMenuItem('Braised Pork', 'Braised chunks of pork with a ginger marinade alongside mashed potatoes and a helping of peas.', '6 sp, 9 cp'));
    menu.appendChild(createMenuItem('Pan-fried Lamb', 'Pan-fried bits of lamb in a cream sauce served with pasta and chard and red peppers.', '6 sp, 9 cp'));
    menu.appendChild(createMenuItem('Braised Turkey', 'Braised bits of turkey in red sauce alongside quinoa with a serving of radishes', '7 sp'));
    menu.appendChild(createMenuItem('Roasted Rabbit', 'Roased rabbit in vodka sauce on a bed of bread with a serving of caramelized onions.', '6 sp, 7 cp'));

    const warning = document.createElement('p');
    warning.textContent = 'Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may require a Constitution saving throw.';
    warning.classList.add('warning-text');
    menu.appendChild(warning);

    // drinks
    menu.appendChild(createMenuCategory('Lagers & Ales'))

    menu.appendChild(createMenuDrinkItem('Dueling Hoard Pilsner', '7% ABV', 'An imported medium brown pilsner. Described as a refreshing pilsner with a rich finish.', '6 sp, 2 cp', '1 sp, 2 cp'));
    menu.appendChild(createMenuDrinkItem('Green Goat Hard Cider', '6.36% ABV', 'An imported reddish cider. Described as a spicy cider with a sour finish.', '4 sp, 9 cp', '9 cp'));
    menu.appendChild(createMenuDrinkItem('Crimson Medusa Porter', '7.45% ABV', 'An imported dark brown porter. Described as a mild porter with notes of honey and a rich finish.', '5 sp, 5 cp', '1 sp, 1 cp'));
    menu.appendChild(createMenuDrinkItem('Hollow Ettin Lager', '4.73% ABV', 'A microbrewed golden lager. Described as a spicy lager with a hint of hops and a bitter finish.', '4 sp, 4 cp', '8 cp'));

    return menu;
}

const createMenuCategory = (categoryName) => {
    const category = document.createElement('h2');
    category.textContent = categoryName;
    category.classList.add('menu-category');

    return category;
}

const createMenuItem = (name, desc, price) => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('menu-item-container');

    const dishName = document.createElement('h3');
    dishName.classList.add('item-title');
    dishName.textContent = name;
    itemContainer.appendChild(dishName);

    const dishDesc = document.createElement('p');
    dishDesc.classList.add('item-desc');
    dishDesc.textContent = desc;
    itemContainer.appendChild(dishDesc);

    const dishPrice = document.createElement('p');
    dishPrice.classList.add('item-price');
    dishPrice.textContent = price;
    itemContainer.appendChild(dishPrice);

    return itemContainer;
}

const createMenuDrinkItem = (name, alcohol, desc, galPrice, pintPrice) => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('menu-item-container');

    const drinkName = document.createElement('h3');
    drinkName.classList.add('item-title');
    drinkName.textContent = name;
    itemContainer.appendChild(drinkName);

    const drinkAlcohol = document.createElement('p');
    drinkAlcohol.classList.add('item-alcohol');
    drinkAlcohol.textContent = alcohol;
    itemContainer.appendChild(drinkAlcohol);

    const drinkDesc = document.createElement('p');
    drinkDesc.classList.add('item-desc');
    drinkDesc.textContent = desc;
    itemContainer.appendChild(drinkDesc);

    const drinkGalPrice = document.createElement('p');
    drinkGalPrice.classList.add('item-price');
    drinkGalPrice.textContent = `Gallon Price: ${galPrice}`;
    itemContainer.appendChild(drinkGalPrice);

    const drinkPintPrice = document.createElement('p');
    drinkPintPrice.classList.add('item-price');
    drinkPintPrice.textContent = `Pint Price: ${pintPrice}`;
    itemContainer.appendChild(drinkPintPrice);

    return itemContainer;
}

const printMenu = () => {
    const main = document.getElementById('main');
    const menuBtn = document.getElementsByClassName('menu-btn')[0];

    menuBtn.classList.add('active');

    main.appendChild(createMenu());
}

export default printMenu;