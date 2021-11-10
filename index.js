let firstName = 'Sam';

if (firstName === 'Noah') {
     console.log('Hello, Noah!');
} else {
    console.log('Hey, ' + firstName);
}

let costOfMilk = 4;

if (costOfMilk < 2) {
    console.log ('I will buy 2 gallons');
} else if (costOfMilk < 3) {
    console.log('I will only buy 1 gallon');
} else {
    console.log('No milk for me, it is too expensive');
}

let grade = 'A';
let pass = 'You did it!';
let barelyPass = 'Lets try a little harder next time.';
let fail = 'Come to my office after class.';

switch (grade) {
    case 'A':
        console.log('90-100');
        console.log(pass);
        break;
    case 'B':
        console.log('80-89');
        console.log(pass)
        break;
    case 'C':
        console.log('70-79');
        console.log(barelyPass);
        break;
    case 'D':
        console.log('60-69');
        console.log(barelyPass);
        break;
    default:
        console.log('0-59');
        console.log(fail);
}

let a = 1;
let b = 2;

if (a === 1) {
    if (b === 2) {
        console.log('a is 1 and b is 2');
    } else {
        console.log('a is 1 but b is not 2');
    }
}

if (a === 1 && b === 2) {
    console.log('a is 1 and b is 2');
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}

for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let names = ['Sam', 'Tom', 'Bob'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

let q = 12;
 while (q < 10) {
     console.log(q)
     q++;
 }

 do {
     console.log(q);
 } while (q < 10)

 for (i in names) {
     console.log(names[i]);
 }

let fullName = window.prompt('What is your name?');
window.alert('Welcome, ' + fullName);


//Arrays

var customerNames = [];
customerNames.push('Sam Smith');
customerNames.push('Tommy Guns');
customerNames.push('Tom Jones');
customerNames.push('Chad Chaddington');

for (let i = 0; i < customerNames.length; i++){
  console.log(customerNames[i]);  
}

for (name of customerNames){
    console.log(name);
}

//Functions

function myFunction() {
    for (let i = 0; i < 100; i++){
        console.log(i);
    }
}

function createFullName(firstName, lastName){
     console.log(firstName + ' ' + lastName);
 }

createFullName('Tom', 'Sawyer');

function createFullName(firstName, lastName){
    return firstName + ' ' + lastName;
}
var fullName = createFullName('Tom', 'Sawyer');

//Arrays 2

let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nick'];
let lengths = names.map(function(element){
    return element.length;
});
console.log(lengths);

let sum = lengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});
console.log(sum);

names.forEach(function(element){
    console.log(element);
});

let evens = names.filter(function(element){
    return element.length % 2 == 0;
});
console.log(evens);

let removedElement = names.splice(1, 1);
console.log(removedElement);


//Objects

let dvdPlayer = {
    height: 3,
    width: 18,
    depth: 12,
    weight: 7,
    color: 'black',
    dvdName: 'Mulan',
    printDVDName: function() {
        console.log(this.dvdName);
    }
}

console.log(dvdPlayer.depth);
dvdPlayer.printDVDName();