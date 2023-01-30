const employees = [
    {
        person: {
            firstName: 'Silje',
            lastName: 'Strømstad',
            age: 21,
            dob: "2001-16.03",
            nationality: 'Norway',  

        },
        department:[ 
            'student', 
            'ux/ui'
        ],
        adress:{
            state: 'Norway',
            city: 'Nittedal',
            street: 'Grindbråtan',
            housenumber: '60, a',
            postadress: '1484, Hakadal',
           
        }, 
        mail: 'silje.eidsvoll@gmail.com',
    },
  {

        person: {
        firstName: 'Alexander',
        lastName: 'Volden',
        age: 25,
        dob: "1997-23-12",
        nationality: 'Norway'
    },
    department: [
        'student',
        'el-kraft',
    ],
    adress: {
        state: 'Norway',
        city: 'Nittedal',
        street: 'Grindbråtan',
        housenumber: '60, a',
        postadresse: '1484, Hakadal',
    },
    mail: 'voldenalexander@gamil.com',

  },

  {
    person: {
    firstName: 'Joakim',
    lastName: 'Thue',
    age: 25,
    dob: "1997-11-06",
    nationality: 'Norway'
},
department: [
    'coast guard',
    'master of the ship',
],
adress: {
    state: 'Norway',
    city: 'Nittedal',
    street: 'Tøyenhaugen',
    housenumber: '8',
    postadresse: '1484, Hakadal',
},
mail: 'thuenjoakim@gamil.com',

},

{
    person: {
    firstName: 'Henrik',
    lastName: 'Strømstad',
    age: 52,
    dob: "1970-20-03",
    nationality: 'Norway'
},
department: [
    'Photograph',
    'self-employed',
],
adress: {
    state: 'Norway',
    city: 'Fetsund',
    street: 'Ramstadskogtunet',
    housenumber: '15',
    postadresse: '1900, Fetsund',
},
mail: 'henrik@bestfoto.no',

},
]

console.log(employees)

const bodyElement = document.querySelector('body');
const ulElement = document.createElement('ul');

employees.forEach((employee) => {
    console.log(employee.person.firstName)
    const liElement = document.createElement('li');
    liElement.textContent = `
    ${employee.person.firstName}
    ${employee.person.lastName}
    (${employee.department[0]})
    `;
    //liElement.textContent = employee.person.firstName;
    ulElement.appendChild(liElement);
});

bodyElement.appendChild(ulElement)
