//min

//#1
let car = {
    manufacture: "Renault",
    model: "Sandero Stepway",
    year: 2014,
    speed: 90,
    fuel: 40,
    сonsumption: 7,
    driver: 'Mike',

    info() {
        console.log('manufacture:', car.manufacture);
        console.log('model:', car.model);
        console.log('year:', car.year);
        console.log('speed:', car.speed);
        console.log('fuel:', car.fuel);
        console.log('consumption:', car.сonsumption);
        console.log('driver:', car.driver)
    },

    add(name) {
        car.driver=name;
    },
  
    check(driver) {
        if(car.driver==driver){
            return true;
        } else {
            return false;
        }
    },

    fuelConsumption(distance) {
        return (distance/100*car.сonsumption);
    },

    time(distance) {
        if( (distance/car.speed)/4>=1) {
            return ((distance/car.speed)+((distance / car.speed)/4));
        } else{
            return (distance/car.speed);
        }
    },
}

car.info();
car.add('Mike');
//__________//
console.log(car.check('Mike'));
console.log(car.check('Diego'));
console.log(car.check('Alex'));
//__________//
let distance = 180;
console.log(`To drive ${distance} kilometres i need a fuel - ${Math.floor(car.fuelConsumption(distance))} liters!`);
console.log(`To drive ${distance} kilometres i need a time - ${(car.time(distance)-(car.time(distance)-Math.floor(car.time(distance))))} hours and ${Math.floor((car.time(distance)-Math.floor(car.time(distance)))*60)} minutes!`);

//_________//
console.log('________________________')

//norm

//#2
let time = {
    hours: 12,
    minutes: 24,
    seconds: 48,

    nowTime() {
        console.log(`${time.hours}:${time.minutes}:${time.seconds}`);
    },
    secondsChange(sec) {
        sum = time.seconds + sec;
        time.seconds = sum%60;
        time.minutes = (time.minutes+parseInt(sum/60))%60;
        time.hours = time.hours+parseInt((time.minutes+parseInt(sum/60))/60);
        console.log(`${time.hours}:${time.minutes}:${time.seconds}`);
    },
    minutesChange(min) {
        sum = time.minutes+min;
        time.minutes = sum%60;
        time.hours = time.hours+parseInt(sum/60);
        console.log(`${time.hours}:${time.minutes}:${time.seconds}`);
    },
    hoursChange(hour) {
        sum = time.hours+hour;
        time.hours = sum%24;
        console.log(`${time.hours}:${time.minutes}:${time.seconds}`);
    }
}
time.nowTime();
time.secondsChange(7344);
time.minutesChange(164);
time.hoursChange(6);

//_________//
console.log('________________________')

//max

//#3

let count = {
    first: ['num:', 2, 'den:', 4],
    second: ['num:', 2, 'den:', 3],

    addition() {
        result = [];
        den = count.first[3] * count.second[3];
        num = count.first[1] * count.second[3] + count.second[1] * count.first[3];
        if (num === den) {
            result.push('number:', num / den);
        } else if (num > den) {
            result.push('number:', parseInt(num / den), 'num:', (num - parseInt(num / den) * den), 'den:', den);
        } else {
            result.push('num:', num, 'den:', den);
        }
        console.log('addition :', result);
    },

    subtraction() {
        result = [];
        den = count.first[3] * count.second[3];
        num = count.first[1] * count.second[3] - count.second[1] * count.first[3];
        if (num === den) {
            result.push('number:', num / den);
        } else if (num > den) {
            result.push('number:', parseInt(num / den), 'num:', (num - parseInt(num / den) * den), 'den:', den);
        } else {
            result.push('num:', num, 'den:', den);
        }
        console.log('subtraction :', result);
    },

    multiplication() {
        result = [];
        den = count.first[3] * count.second[3];
        num = count.first[1] * count.second[1];
        if (num === den) {
            result.push('number:', num / den);
        } else if (num > den) {
            result.push('number:', parseInt(num / den), 'num:', (num - parseInt(num / den) * den), 'den:', den);
        } else {
            result.push('num:', num, 'den:', den);
        }
        console.log('multiplication :', result);
    },

    division() {
        result = [];
        den = count.first[3] * count.second[1];
        num = count.first[1] * count.second[3];
        if (num === den) {
            result.push('number:', num / den);
        } else if (num > den) {
            result.push('number:', parseInt(num / den), 'num:', (num - parseInt(num / den) * den), 'den:', den);
        } else {
            result.push('num:', num, 'den:', den);
        }
        console.log('division :', result);
    },

    reduction() {
        result = [];
        n=1;
        for (i = 1; i <= count.first[1] && i <= count.first[3]; i++) {
            if (count.first[1] % i === 0 && count.first[3] % i === 0) {
                n=i;
            }
        }
        den = count.first[3]/n;
        num = count.first[1]/n;
        if (num === den) {
            result.push('number:', num/den);
        } else if (num > den) {
            result.push('number:', parseInt(num / den), 'num:', (num - parseInt(num / den) * den), 'den:', den);
        } else {
            result.push('num:', num, 'den:', den);
        }
        console.log('reduction:', result);
    }
}
console.log(count);
count.addition();
count.subtraction();
count.multiplication();
count.division();
count.reduction();
