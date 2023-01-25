//hente body elememt
const bodyElement = document.querySelector('body');

//hente button element
const buttonElemen = document.querySelector('button');

//håntere hendelser i button element
buttonElemen.addEventListener('click', () => {
    //bodyElement.classList.add('body-color');
    bodyElement.classList.toggle('body-color')
})