console.log('dom js loaded');

//hent HTML element av H1 fra document og lagre den
const h1Element = document.querySelector('h1');
h1Element.textContent = 'Hello, how are you doing?'; 

const pElement = document.querySelector('p');
pElement.textContent = 'This is the paragraph'; 

console.log(h1Element)
h1Element.style = 'color: #ff0000'


changeImg();

function changeImg() {
const imgElement = document.querySelector('img')
console.log(imgElement);
imgElement.src = './assets/Image2.jpg';
imgElement.width = '800';
//imgElement.style = 'width: 360px';
//imgElement.style.width = '200'; 
//imgElement.style = 'transform: scale(0.5)';  
}

plotName();

function plotName() {
    const firstName = 'Ola'; 
    const lastName = 'Normann';
    console.log(firstName);
    console.log(lastName)
}


console.clear();
///////////////////////////////////////////////////////////////////////////////

/* const value1 = prompt('skriv her først verdi');
console.log(value1);
const value2 = prompt('skriv her andre verdi');
console.log(value2);
const action = prompt('operator');

const resultElement = document.querySelector('#result')

if(action === 'multiply') {
    console.log(value1 * value2) ;
    resultElement.textContent = 'resultat: ' + (value1 * value2);  
        
}

if(action === 'divide') {
    console.log(value1/value2); 
    resultElement.textContent = 'resultat: ' + (value1 / value2);  
} */

console.clear(); 
////////////////////////////////////////////////////////////////////////////////// 18.01

const pElementCreate = document.createElement('p');
pElementCreate.textContent = 'dette <p> bygger vi i JavaScript';
console.log(pElementCreate); 


const parentBodyElement = document.querySelector('body'); 
parentBodyElement.append(pElementCreate);

console.log(parentBodyElement); 

const h2ContainerCreate = document.createElement('h2');
h2ContainerCreate.textContent = 'titel til div container';

const boxContainerElement = document.querySelector('.container');
boxContainerElement.appendChild(h2ContainerCreate); 

boxContainerElement.prepend(h2ContainerCreate);

const whoIsParent = h2ContainerCreate.parentNode;
console.log(whoIsParent);
