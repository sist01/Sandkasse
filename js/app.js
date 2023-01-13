var firstname = 'carlo';

const newname= 'Alberto'; 



let age = 32; 
age = 33; 

console.log(firstname + ' er ikke sliten ' + age); 

console.log(3 + 4);

function add() {
    return 3 + 4; 
}

add(); 

console.log(add()); 

////////////////////////////////////////////////////////////////////////////////////////////

function multiply(a, b, c, d) {
    return a * b * c * d;
}

function divide(a, b) {
    return a / b; 
}

console.log(multiply(4, 7, 6, 9));
console.log(multiply(435, 265, 4, 5));

console.log(divide(10, 21));    

//////////////////////////////////////////////////////////////////////////////////////////// fredag 13.01

console.log(newname + ' er normann'); 
console.log(newname + ' er fra oslo'); 

console.clear();

const myage = 44 // number // med ' ' blir det string
const yourage = 56 // number

const yourname = 'pål'; // string

const isLoggedIn = true; // boolean
 
// undefined

let keyboard = null; 

console.log(myage + yourage); 
//

console.log(2**4); 

console.log(Math.PI);

console.log(new Date());
//

console.log(20 > 10); 
//
console.clear();

if (10 > 5) {
    alert('10 er større enn 5');
} else {
    alert('nei 10 er mindre enn 5'); 
}
//
console.clear();

// sjekke om butikken er åpen eller stengt akkurat nå

function checOpeningTime() {

    // 1 tidspunkt for åpning
    const openingTime = 8;

    // 2 tidspunkt for stenging
    const closingTime = 18;

    // 3 tid nå
    const today = new Date();
    console.log(today);

    // 4 stengte dager 
    const timeNow = today.getHours(); 
    console.log(timeNow);

    //
    if(timeNow > openingTime && timeNow < closingTime) {
        alert('Butikken er åpen!');

    } else {
        alert('Butikken er stengr');
    } 
}

checOpeningTime();