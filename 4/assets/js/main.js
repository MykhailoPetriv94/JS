//min

//#1
function myFunc() {
   alert('Hello, Mike!');
}
myFunc();

function greet(name) {
    alert(`Hello, ${name}!`);
}
greet('Mike');
greet('Jane');

function say() {
    let message = 'Say hello!';
    console.log(message);
}
say();

function getRectArea(width, height) {
    return width * height;
}
let area = getRectArea(20,10);
console.log(area);

let myFun = function() {
alert('Hello, Mike!');
}
greet();

let square = (width, height) => {
    return width * height;
}
console.log(square(20,10));

//#2
function elements() {
    return (arguments.length);
}
console.log(elements(0, 50, 100, 200, 500));

//#3
let a = prompt('Enter the a-number')
console.log(a)
let b = prompt('Enter the b-number')
console.log(b) 
function numbers(a,b) {
    if (a == b) {
        return 0;
    }
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
}
console.log('The function condition is -', numbers(a,b))

//#4
let c = prompt('Enter any number what you like!');
console.log(c);
function factorial(c) {
    let result = 1;
    while (c) {
        result *= c--;
    }
    return result;
}
console.log('The factorial is -', factorial(c)) 

//#5
function numb(numb1, numb2, numb3) {
    return parseInt((numb1.toString()+numb2.toString()+numb3.toString()));
}
console.log(numb(9,4,8));

//#6
let width = prompt('Enter the width of the rectangular.');
console.log(width);
let height = prompt('Enter the height of the rectangular.');
console.log(height);
function rectArea(width, height) {
let CountRectArea = 0;
if (height === undefined) {
    rectArea = width ** 2;
}
else {
    rectArea = width * height;
}
return rectArea;
}
console.log('The square of the rectangular - ', rectArea(width, height));
alert(`The square of the rectangular is - ${rectArea}`); 

//norm

//#1
function perfectNumb(numb) {
    let divider = 0;
    console.log(divider);
    for(i=1; i<numb; i++) {
        if(numb%i == 0) {
            divider += i; 
        }
    }
    if(divider === numb) {
       return console.log(`The number ${numb} is perfect.`);
    } 
    else {
       return console.log(`The number ${numb} is not perfect.`);
    };
}
perfectNumb(6);
perfectNumb(28);
perfectNumb(60);
perfectNumb(280);

//#2
function perfectInterval(min,max) {
    let perfectNumbers = [];
    for(numb = min; numb <= max; numb++) {
        function perfectNumb(numb) {
            let divider = 0;
            console.log(divider);
            for(i=1; i<numb; i++) {
                if(numb%i == 0) {
                    divider += i; 
                }
            }
            if(divider === numb) {
               return true;
            } 
            else {
               return false;
            };
        }
        if (perfectNumb(numb) == true){
            perfectNumbers.push(numb);
        }
    }
    return perfectNumbers;
}
console.log(perfectInterval(1,10000));