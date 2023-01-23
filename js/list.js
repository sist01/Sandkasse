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