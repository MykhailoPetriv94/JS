//min

//#2
let userName = 'Mykhailo Petriv';
let nickname = 'Mykhailo Petriv';
let $name123 = 'Mykhailo Petriv';
let user = 'Mykhailo Petriv';
//let 123name = 'Mykhailo Petriv';
//let nick-name = 'Mykhailo Petriv';
//let 'user' = 'Mykhailo Petriv';
//var @user = 'Mykhailo Petriv';

//#3
// ... //
/** ... */
/* ... */

//#4
let name1 = 'Mykhailo';
let age1 = '27';
let height1 = '1.83m';

let name2 = 'Mykhailo', age2 = '27', height2 = '1.83m';

let name3 = 'Mykhailo',
    age3 = '27',
    height3 = '1.83m';

//norm
 
//#1
let name = prompt('What is your name?');
console.log (name);
alert('Hello, '+ name +'!');

//#2
const year = 2022;
let birth = prompt ('What is your year of birth?');
console.log(birth);
let age = year - birth;
console.log(age);
alert('You are '+ age +' years old now!');

//#3
let a = prompt ('What is length of the side of the square?');
console.log(a);
let P = 4*a;
console.log(P);
alert('The perimetr of the square is equal '+ P +' cm');

//max

//#1
let r = prompt ('What is the radius of the circle?');
console.log(r);
const pi = 3.14;
let square = pi * r**2;
console.log(square);
alert('The square of the circle is equal - ' + square+ 'cm2');

//#2
let distance = prompt ('What is the distance between cities?');
console.log(distance);
let time = prompt ('How long does it takes to get to another city?');
console.log(time);
let speed = distance/time;
console.log(speed);
alert('To be in time i need to drive - '+ speed +'km/h');

//#3
const exchange = 0.99;
console.log(exchange);
let dolar = prompt ('What amount you need to exchange?');
console.log(dolar);
let euro = exchange * dolar;
console.log(euro);
alert('If you exchange '+ dolar +'$, you get '+ euro +'Є at the exchange rate '+ exchange +'!');

