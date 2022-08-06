//min

//#1
let age = prompt('What is your age?');
console.log(age);
if (age > 0 && age <= 11) {
    alert('You are a child!');
}
if (age >= 12 && age <= 17) {
    alert('You are a teenager!');
}
if (age >= 18 && age <= 59) {
    alert('You are an adult!');
}
if (age >= 60 && age <= 95) {
    alert('You are a pensioner!');
}
if (age <= 0) {
    alert('ERROR');
}

//#2
let number = prompt('Choose your number from 0 to 9!');
switch (number) {
    case '0' :
        alert('Your symbol - )');
        break
    case '1' :
        alert('Your symbol - !');
        break
    case '2' :
        alert('Your symbol - @');
        break
    case '3' :
        alert('Your symbol - #');
        break
    case '4' :
        alert('Your symbol - $');
        break
    case '5' :
        alert('Your symbol - %');
        break
    case '6' :
        alert('Your symbol - ^');
        break
    case '7' :
        alert('Your symbol - &');
        break
    case '8' :
        alert('Your symbol - *');
        break
    case '9' :
        alert('Your symbol - (');
        break                   
}

//#3
let first = parseInt(prompt('Enter the first number of the numeric interval'));
console.log(first);
let second = parseInt(prompt('Enter the second number of the numeric interval'));
console.log(second);
let sum = 0;
console.log(sum);
if(isNaN(first) || isNaN(second) || first == undefined || second == undefined) {
}
else {
    for(let i = first; i <=second; i++) sum += i
  alert(`The sum of the interval from ${first} to ${second} equals - ${sum}`); 
}

//#4
let a = prompt('Enter the first number');
console.log(a);
let b = prompt('Enter the second number');
console.log(b);
let divider = 0;
console.log(divider);
for (i=1; i<=a && i<=b; i++) {
    if (a%i === 0 && b%i === 0 ) {
        divider = i;
    }
}
alert(`The greatest common divider for ${a} and ${b} - ${divider}`);

//#5
let c = prompt('Enter your number');
console.log(c)
let div = `The dividers of ${c} are - `;
for (i=1; i<=c; i++) {
    if(c%i === 0) {
        div += `${i} `
    }
}
alert(div);

//norm

//#1
let e = prompt('Enter the five-sign number');
console.log(e);
let f = e;
console.log(f);
let g = '';
while (e.length !== g.length) {
    g += (f%10);
    f = parseInt(f/10);
}
if (g === e) {
    alert (`${e} - is a palindrome`);
} else {
    alert (`${e} - is not a palindrome`);
}

//#2
let summary = parseInt(prompt('Enter the total price'));
console.log(summary); 
if (summary>0 && summary<200) {
    alert(`Sorry! You do not have a discount. You have to pay - ${summary} UAH.`)
}
if (summary>=200 && summary<300) {
    summary -= summary * 0.03;
    alert(`Your discount - 3%. You have to pay - ${summary} UAH.`)
}
if (summary>=300 && summary<500) {
    summary -= summary * 0.05;
    alert(`Your discount - 5%. You have to pay - ${summary} UAH.`)
}
if (summary >= 500) {
    summary -= summary * 0.07;
    alert(`Your discount - 7%. You have to pay - ${summary} UAH.`)
} 
else {
    alert('ERROR')
}

//#3
let numbers = prompt('Enter any ten numbers in a row (use a gap).');
let row = numbers.split(' ')
console.log(row)
console.log(row.length)
let pos = 0;
let neg = 0;
let even = 0;
let odd = 0;
let zero = 0;

for (i = 0; i < row.length; i++) {
    if (Number(row[i]) > 0) {
        pos++
    }
    if (Number(row[i]) < 0) {
        neg++
    }
    if (Number(row[i]) % 2 === 0 && Number(row[i]) !== 0) {
        even++
    }
    if (Number(row[i]) % 2 !== 0 && Number(row[i]) !== 0) {
        odd++
    } 
    if (Number(row[i]) === 0) {
        zero++
    }
}
alert(`You entered numbers which of them : positive numbers - ${pos}, negative numbers - ${neg}, even numbers - ${even}, odd numbers - ${odd} and zeros - ${zero}.`)

//#4
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let agree = true;
if (agree = true) {
    let yes = confirm(`Do you want to know the first day of the week?`);
    while(yes === true) {
        for (i = 0; i <= days.length; i++) {
            if(i<7) {
                if (yes === false) {
                    break
                }
                yes = confirm(`${days[i]}. Do you want to see the next day?`)
            }
            if(i === 7) {
                for (i = 0; i < days.length; i++) {
                    if (yes === false) {
                        break
                    }
                    yes = confirm(`${days[i]}. Do you want to see the next day?`);
                }
            }
        }
    }
}

//max

//#1
let firstNumb = 0;
console.log(firstNumb);
let secondNumb = 100;
console.log(secondNumb);
let eachNumb = secondNumb;
console.log(eachNumb);
let result = false;
console.log(result);
while(result == (confirm(`Your number is ${eachNumb} ?`))) {
    eachNumb = (Math.floor((firstNumb+secondNumb)/2));
    if(confirm(`Your number is more than ${eachNumb} ?`)) {
        firstNumb = eachNumb;
    }if (confirm(`Your number is less than ${eachNumb} ?`)) {
        secondNumb = eachNumb;
    }
};
alert(`WOW! Your number is - ${eachNumb}.`);

//#2
for(let x=2; x<=9; x++) {
    for(let y=1; y<=10; y++) {
        alert(`${x}*${y} = ${x*y}`);
   }
}

//#3
let date = new Date((parseInt(prompt('Enter a year'))), (parseInt(prompt('Enter a month'))), (parseInt(prompt('Enter a day'))));
let day = date.valueOf() + (3600 * 24 * 1000);
let tomorrow = new Date(day);
const nextDay = tomorrow.getDate()
const nextMonth = tomorrow.getMonth()
const nextYear = tomorrow.getFullYear()
alert(`The next day date is - ${nextDay}.${nextMonth}.${nextYear}`)