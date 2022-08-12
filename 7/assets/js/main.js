//#1
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(r) {
        return this.radius = r;
    }
    getDiameter() {
        return this.radius * 2;
    }
    square() {
        return (Math.PI * (this.radius ** 2)).toFixed(2);
    }
    length() {
        return (2 * Math.PI * this.radius).toFixed(2);
    }
}
let circle = new Circle(50);
console.log('Your circle radius is -', circle.getRadius(), 'cm.');
console.log('New circle radius is -', circle.setRadius(100), 'cm.');
console.log('The diameter of the circle is -', circle.getDiameter(), 'cm.');
console.log('The square of the circle is -', circle.square(), 'cm2');
console.log('The length of the circle is -', circle.length(), 'cm.');

//#2
class Marker {
    constructor(color, capacity) {
        this.color = color;                                     
        this.capacity = parseInt(capacity);           
    }
    toPrint(text) {                     
        let textArr = text.split("");
        let textLength = this.capacity/0.5;
        let toPrint = []
        for (let i = 0; i <= textLength-1; i++) {
            if (textArr[i] == " ") {
                textLength += 1;
            }
            toPrint.push(textArr[i])
        }
        return document.write(`<p style="color: ${this.color}">${toPrint.join("")}</p>`);
    }
}

let pinkMarker = new Marker('pink', '95%');
let orangeMarker = new Marker('orange', '45%');
let blueMarker = new Marker('blue', '70%');
let blackMarker = new Marker('black', '35%');
let redMarker = new Marker('red', '80%') 

let textPrint = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.';

document.write("<h2>#2</h2>")
pinkMarker.toPrint(textPrint)
orangeMarker.toPrint(textPrint)    
blueMarker.toPrint(textPrint)     
blackMarker.toPrint(textPrint)
redMarker.toPrint(textPrint)  

class MarkerRefill extends Marker {
    constructor(color, capacity) {
        super(color, capacity);
    }
    refill() {
        this.capacity = 100;
    }
}

let greenMarker = new MarkerRefill('green', '25%');
greenMarker.toPrint(textPrint); 
greenMarker.refill();               

//#3
document.write("<h2>#3</h2>")
class Employee {
    constructor(name, age, experience, position, salary) {
        this.name = name;
        this.age = age;
        this.experience = experience;
        this.position = position;
        this.salary = salary;
    }
}
const arrEmployees = [
    new Employee("Олег Дем'янів", 24, '2 years' , "виконавець робіт", '25000 UAH',),
    new Employee("Дмитро Говзан", 35, '13 years',"старший виконавець робіт", '32000 UAH'),
    new Employee("Степан Коваль", 59, '34 years',"керівник проекту", '50000 UAH'),
    new Employee("Роман Коржак", 36, '14 years',"генеральний директор", '150000 UAH'),
    new Employee("Аліна Веприняк", 20, '2 years', "адміністратор", '12000 UAH'),
    new Employee("Вікторія Нагорна", 39, '19 years',"HR-керівник", '80000 UAH'),
    new Employee("Уляна Вербовська",35, '13 years', "головний бухгалтер", '30000 UAH'),
    new Employee("Андрій Осташ", 33, '14 years', "головний інженер", '60000 UAH'),
    new Employee("Юрій Ткачук", 35, '12 years', "керівник проектного офісу", '90000 UAH'),
    new Employee("Вероніка Данилюк", 22, '1 year', "помічник HR-керівника", '28000 UAH')
]
class EmpTable {
    constructor(arr) {
        this.arr = arr;
    }
    getHTML() {
        document.write('<table style="border: 1px solid; margin: 20px 50px"><thead><tr><th style="border: 1px solid;">NAME</th><th style="border: 1px solid;">AGE</th><th style="border: 1px solid;">EXPERIENCE</th><th style="border: 1px solid;">POSITION</th><th style="border: 1px solid;">SALARY</th></tr></thead>')
        let row = '<tbody>'
        this.arr.forEach(element => {
            row += `<tr><td style="border: 1px solid;">${element.name}</td><td style="border: 1px solid;">${element.age}</td><td style="border: 1px solid;">${element.experience}</td><td style="border: 1px solid;">${element.position}</td><td style="border: 1px solid;">${element.salary}</td><tr>`
        })
        document.write(row + '</tbody>' + '</table>')
    }
}
const EmpTableNew = new EmpTable(arrEmployees)
EmpTableNew.getHTML()