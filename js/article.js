// Lagre i variabel html element fra document
const bodyElement = document.querySelector('body');

// Bygge H1 og gi en textcontent som tittel
const h1Element = document.createElement('h1');
h1Element.textContent = 'Tittel til articel'

// Bygge img tag og gi en src bildet verdi
const imgElement = document.createElement('img');
imgElement.src = './assets/Image2.jpg';
imgElement.alt = 'Skog bildet';

imgElement.style = 'width: 360px';
imgElement.style.width = '200'; 

// Bygge en paragarph og legge inn en tekst
const pElement = document.createElement('p');
pElement.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Id obcaecati quasi doloremque, distinctio dolor repellendus 
ducimus porro necessitatibus eligendi, odio eius, quo quam 
consequuntur molestiae? Tenetur ex provident unde cualisa?`

// append alle elementer inn i hoved container
bodyElement.appendChild(h1Element);
bodyElement.appendChild(imgElement);
bodyElement.appendChild(pElement);

// Listen

// Lage hoved container ul (unordered list)
const ulElement = document.createElement('ul');

// Loop med for
for(let i = 0; i <= 16; i++) {
    console.log(i);
    const liElement = document.createElement('li');
    liElement.textContent = 'item' + i;
    ulElement.appendChild(liElement)
} 
console.log(ulElement)
bodyElement.appendChild(ulElement);