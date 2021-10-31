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
