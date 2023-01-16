console.log('dom js loaded');

//hent HTML element av H1 fra document og lagre den
const h1Element = document.querySelector('h1');
h1Element.textContent = 'Hello, how are you doing?'; 

const pElement = document.querySelector('p');
pElement.textContent = 'This is the paragraph'; 

console.log(h1Element)
h1Element.style = 'color: #ff0000'

const imgElement = document.querySelector('img')
console.log(imgElement);
imgElement.src = './assets/Image2.jpg';
imgElement.sizes = '30px, 20px'; 