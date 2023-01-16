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
    //alert('10 er større enn 5');
} else {
    //alert('nei 10 er mindre enn 5'); 
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
        //alert('Butikken er åpen!');

    } else {
        //alert('Butikken er stengr');
    } 
}

checOpeningTime();

///////////////////////////////////////////////////////////////////////////////

// Bytte mellom darkmode og lightmode

// Mode value

    function switchMode(status) {
        if(status === 'light') {
            alert ('Du valgte lghtmode');
        } else {
            alert('Du er i darkemode')
        }
};

const myStatus = 'light';
let oneSattus = 'light';

//switchMode (oneSattus)

////////////////////////////////////////////////////////////////////////////

// kalkulere omkrets av sirkel ved diameter verdi

function calculateCircle(diameter) {

    // 2PIr // diameter*PI 

    const pi = Math.PI;
    const result = diameter * pi
    console.log(Math.ceil(result));

} 

calculateCircle(13);


//////////////////////////////////////////////////////////////////////////

// lag en funkjson som console.log areal av en rektangel 
// ved å gi høyde og bredde verdi
// min

function calculateRektangle (areal) {

    console.log(areal);

}

calculateRektangle(5 * 3);

//////////////////////////////////////////////////////////////////////////////
/// carlo

function calculateRektangle1(width, height) {
    console.log((width * height) / 2)
}


calculateRektangle1(13, 7);



///////////////////////////////////////////////////////////////////////////



function calculateTriangle(width, height) {
    console.log((width * height) / 2)

}

calculateTriangle(22, 43);


/////////////////////////////////////////////////////////////////////////// 16.01
    console.clear();

    console.log(document);

    const section1Element = document.querySelector('section');
    console.log(section1Element); 

    const headerElement = document.querySelector('header');   // via tag navn
    console.log(headerElement);

    //const pElement = document.querySelectorAll('div p');   // children og parent
    //console.log(pElement);

// querySelector med klassenavn

    const p3Element = document.querySelector('.p-3');
    console.log(p3Element);

    p3Element.textContent = 'we change this to p-3000'

// querySelector med id

    const p4Element = document.querySelector('#p-4');
    console.log(p4Element);

    const p4ElementById = document.getElementById('p-4');
    console.log(p4ElementById); 

    // querySelctorAll

    const allPElement =document.querySelectorAll('p');
    console.log(allPElement);

