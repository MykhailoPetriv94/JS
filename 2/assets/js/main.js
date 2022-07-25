// min

//#1
let x = 0.1;
console.log(x);
let y = 0.2;
console.log(y);
let z = x + y;
console.log(z);
alert('0.1 + 0.2 = '+ z.toFixed(1));

//#2
let a = "1";
console.log(a);
let b = 2;
console.log(b);
alert('"1" + 2 = ' + +((+a)+b));

//#3
let flash = parseInt(prompt('What is the memory of USB-flash in Mb?'));
let file = 820;
console.log(file);
let number = Math.floor(flash / file);
console.log(number);
alert('There are ' + number + ' files on the USB-flash with memory ' + flash + 'Mb.');

//norm

//#1
let sum = parseInt(prompt('What sum do you have in your wallet (UAH)?'))
console.log(sum);
let one = parseInt(prompt('How much does one chocolate cost (UAH)?'))
console.log(one);
let num = Math.floor(sum/one).toFixed(0);
console.log(num);
let change = sum - (one*num);
console.log(change);
alert('You can buy ' + num + ' chocolates and your change will be - ' + change + ' UAH.');

//#2
let sign3 = prompt('What three-sign number do you want to wish?');
console.log(sign3);
let result ='';
result = result + sign3%10;
sign3 = parseInt(sign3/10);
result = result + sign3%10;
sign3 = parseInt(sign3/10);
result = result + sign3;
alert(result);

//max

//#1
let deposit = prompt('What sum do you want to put on deposit (UAH)?');
console.log(deposit);
const percent = (0.05/12).toFixed(4);
console.log(percent);
const month = 2;
let money = (deposit * percent * month).toFixed(0);
alert('Your money sum will be - ' + money + 'UAH, if you put on deposit ' + deposit + 'UAH with ' + percent + '% for ' + month + ' months.')

//#2
console.log('2 && 0 && 3') 
2 && 0 && 3 - false(0) //шукає перше хибне значення, у цьому випадку false - 0

console.log('2 || 0 || 3')
2 || 0 || 3 - true(2) //повертає перше правдиве значення, у цьому випадку true - 2

console.log('2 && 0 || 3')
2 && 0 || 3 - true(3) //послідовність дій зліва направо, перше хибне - 0, друге правдиве - 3, відповідно true - 3

