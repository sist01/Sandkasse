console.log('attribute');

const h1Element = document.querySelector('h1'); 

h1Element.id = '12876'; // gammel metode
h1Element.setAttribute('id', 'idbyset'); // beste praksis

console.log(h1Element);

const pElement = document.querySelector('.p-element');
//pElement.setAttribute('class', 'new-class');
//pElement.className = 'one-class';
//pElement.setAttribute('style', 'backround-color: #ff0000;')
console.log(pElement); 

const linkElement = document.createElement('a');
 

linkElement.setAttribute('href', 'https://www.kristiania.no');
linkElement.textContent = 'Link til kristiania'; 

// hente body fra html
const bodyElement = document.querySelector('body');

// append linkElement til body
bodyElement.appendChild(linkElement);

console.log(linkElement);

//////////////////////////////////////////////////////////////////////////////
const attrValue = document.createAttribute('style');
attrValue.value = 'backround.color: #fcf0f3; padding: 1rem'; 

linkElement.setAttributeNode(attrValue);
//pElement.setAttributeNode(attrValue);

// classList
linkElement.classList.add('link');
h1Element.classList.add('link');

