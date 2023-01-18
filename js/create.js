// Variabel for container nav
const navElement = document.createElement('nav');

// Variabel for ul list
const ulElement = document.createElement('ul');

// En eller flere variabel for list item

// Sette nav inni header
// Variabel som lagrer verdi av html node av header
const headerElement = document.querySelector('header');
headerElement.append(navElement);


// Sette ul inn i nav
navElement.append(ulElement);


// Sette en etter hverandre alle liater item (li)


const li1Element = document.createElement('li');
li1Element.textContent = 'About';
ulElement.appendChild(li1Element);

const li2Element = document.createElement('li');
li2Element.textContent = 'Products';
ulElement.appendChild(li2Element); 

const li3Elements = document.createElement('li');
li3Elements.textContent = 'Contact';
ulElement.appendChild(li3Elements);




console.log(headerElement);