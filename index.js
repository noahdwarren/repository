
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

//Templete Literals
//you can use backticks `` in place of '' or "" to create templates that follow line breaks or allow you to do math in a string.
let mystring = `hello
world
my 
name
is
Noah.`;

console.log(mystring);

console.log(`six times five = ${5 * 6}`);

//arrow functions
{
let createFullname = (firstName, lastName) => firstName + ' ' + lastName;
}
{
    let createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
}

// you do not need () if you have only 1 var 
let someFunction = (a, b) => {
    let result = '';
    for(let i = 0; i < b; i++){
    result += a;
    }
    return result;
};
//it is better to use const with your arrow functions so that that do not get changed

//Callbacks
let username = sentHttpRequest('getUser');
console.log(user);
//could get gummed up by a late input.


function logUsername(user) {
    console.log(user);
}
sendHttpRequest('getUser', logUsername);
//better way that will only be read after the input has been given.

sendHttpRequest('getUser', user => console.log(user));

//arrow functions practice
function myFunction(num) { return Math.sqrt(num); }

const returnSquareRoot = (num) => Math.sqrt(num);

function myFunction(yearlyPayment) {
    let monthly = yearlyPayment / 12;
    return monthly.toFixed(2);
}

const monthlyPayment = yearlyPayment => {
   let monthly = yearlyPayment / 12;
   return monthly.toFixed(2);
};

function myFunction(num1, num2) {
    return num1 ^ num2;
}

const xor = (num1, num2) => num1 ^ num2;

function myFunction(num1, num2) {
    return Math.sqrt((num1 * num2) + (num2 * num2));
}

const pythagoras = (num1, num2) => Math.sqrt((num1 * num2) + (num2 * num2));

function addTwoInputs (a, b) {
    return a + b;
}

const returnSum = (a, b) => a + b;

function myFunction(value) { 
    return !value; 
}

const revert = (value) => !value;

function myFunction(num1, num2, num3) {
    let value = 0;
    for(let i = 0; i < num3; i++){
        value = (value + num2) * num1;
    }
    return value / (num1 * (num3 *10));
}

const fancyAlgorithm = (num1, num2, num3) => {
    let value = 0;
    for(let i = 0; i < num3; i++){
        value = (value + num2) * num1;
    }
    return value / (num1 * (num3 *10));
};

//promises

function handleEvent(value) {
    console.log(value);
}

function handleError(err) {
    console.log(err);
}

doSomeThingThatReturnesAPromise()
    .then(handleEvent)
    .catch(handleError);

doSomeThingThatReturnesAPromise()
    .then((value) => {
        console.log(value)
    }).catch((err) => {
        console.log(err);
    });


//classes
//each class should only be in charge of one thing. Holding all the things that are important to the thing the class is holding


class Student {
    constructor() {
        this.firstName = 'Sam';
        this.lastName = 'Smith';
        this.phoneNumber = '4795555555';
        this.grade = 'A';
    }
}
// is not dynamic and won't work correctly for what is needed

class Student {
    constructor(firstName, lastName, phoneNumber, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }

    indroduce() {
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);
    }
}
let student1 = new Student('Tom', 'Smith', '4795211234', 'B');
let student2 = new Student('Sam', 'Thompson', '4793211234', 'A');

student1.introduce();
student2.introduce();



//Inheritance


//Both of these classes have simular code, we can make a larger parent class to take care of elements of these classes



class PromotionSender {
    constructor() {

    }

 sendNotification(notification) {
    console.log('Sending: ' + notification);
 }

 findUserWithStatus(status) {
    let users = getUsers(status);
    return users;
 }

 calculateDiscount(status) {
    if (status === 'Gold') {
        return .3;
    } else if (status === 'Silver') {
        return .15;
    }
    return 0;
 }
}

class CollectionsSender {
    constructor() {

    }

    sendNotification(notification) {
        console.log('Sending: ' + notification);
    }

    findUserWithStatus(status) {
        let users = getUsers(status);
        return users;
     }

    calculateFee(status) {
        if (status === 'OVERDUE') {
            return 10;
        } else if (status === 'DELIQUENT') {
            return 25;
        }
        return 5;
    }
}



//Parent class that can take common code from the previous classes

class NotificationSender {
    constructor(status) {
        this.status = status;
    }
    sendNotification(notification) {
        console.log('Sending: ' + notification);
    }

    findUserWithStatus(status) {
        let users = getUsers(status);
        return users;
     }
}

//Changed classes that work with the parent class 
//The "extends" keyword is used to inherit from another class
//The "super" keyword refers to the parent class that was determined by the "extends" keyword. When the super keyword is followed by () it is refering to the parent class constructor. super is like the "this" keyword. You must always call the parent class' constructer in a class that extends another class. 

class PromotionSender extends NotificationSender {
    constructor(status) {
        super(status);
    }

 calculateDiscount(status) {
    if (status === 'Gold') {
        return .3;
    } else if (status === 'Silver') {
        return .15;
    }
    return 0;
 }
}

class CollectionsSender extends NotificationSender {
    constructor(status) {
        super(status);
    }

    calculateFee(status) {
        if (status === 'OVERDUE') {
            return 10;
        } else if (status === 'DELIQUENT') {
            return 25;
        }
        return 5;
    }
}

let collectionsSender = new CollectionsSender('OVERDUE');
collectionsSender.sendNotification('this is a test collections notification')