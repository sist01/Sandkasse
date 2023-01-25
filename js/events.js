

const averageAge = (a, b, c) => {
    return (a + b + c) / 3;
    
}

/* console.log(averageAge(12, 18, 24)); */


function calculate(a, b) {
    return a * b;
}

/* console.log(calculate(34, 2)); */


function calculate(value1, value2) {
    return value1 * value2;
}

/* console.log(calculate(34, 2)); */


//

//event
//hente boks element fra DOM
    const boxElement = document.querySelector('.box');

//hente select element for å lytte på endring i det
    const selectElement = document.querySelector('.colors');

//fullføre en oppgave når endring skjer i select element
    selectElement.addEventListener('change', (event) => {
    console.log(event.target.value)

    boxElement.setAttribute('style', `background-color: ${event.target.value}`)
    //boxElement.classList.remove('box')
    //boxElement.classList.add(`box ${event.target.value}`);
    
});

//

function initEvent(){
//hent input element med sin egen verdi når man klikker på knappen
const inputElement = document.getElementById('firstName');

//knappen, lytter på hendelse (click)
const buttonElement = document.getElementById('getName');

//hente fra html resultat
const resultElement = document.getElementById('result');

buttonElement.addEventListener('click', addName);

window.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') {
        addName();
    }
}) ;

function addName() {
    const liElement = document.createElement('li');
    if(inputElement.value !=='') {
        liElement.textContent = inputElement.value;
        resultElement.appendChild(liElement);
    }
}}

initEvent();