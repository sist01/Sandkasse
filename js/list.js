console.log('list'); 

function initList() {

    // Lage en ul container
    const ulElement = document.createElement('ul');

    // Lage en eller flere list item
    const liElement = document.createElement('li');

    // Setter inn i list item en a tag med href verdi (forskjellige lenker)
    const aElement = document.createElement('a');
    aElement.setAttribute('href', 'https://www.google.no');
    aElement.setAttribute('target', '_blank')
   

    // Sette inn label for a
    aElement.textContent = 'Google';
    liElement.appendChild(aElement);

    // Bruk en Loop i alternativ


    // Skrive li item tag inni ul continer
    ulElement.appendChild(liElement);

    console.log(ulElement)

    // Sette ul continer med hele liste inn i body
    const bodyElement = document.querySelector('body');
    bodyElement.appendChild(ulElement);

    console.log(ulElement)

};
initList();

function initList() {

let i = 1;
do { 
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');
    const bodyElement = document.querySelector('body');
    const ulElement = document.createElement('ul');
    aElement.setAttribute('target', '_blank')

    if(i === 1)
    aElement.setAttribute('href', 'https://www.google.no');
    aElement.textContent = 'Google';

    if(i === 2)
    aElement.setAttribute('href', 'https://www.kristiana.no');
    aElement.textContent = 'Kristiania';
    
    
    
    
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
    

    i++;
    } while (i <= 6);

   
   bodyElement.appendChild(ulElement);

};
initList();

////////////////////////////////////////////////////////////////////////////


