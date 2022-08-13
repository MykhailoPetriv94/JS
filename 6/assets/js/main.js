//min 

let shoppingList = [
    {
        name: 'water',
        number: 1,
        price: 40,
        sum: 40,
        bought: true
    },
    {
        name: 'milk',
        number: 1,
        price: 25,
        sum: 25,
        bought: false
    },
    {
        name: 'bread',
        number: 2,
        price: 25,
        sum: 50,
        bought: false
    },
    {
        name: 'meat',
        number: 1,
        price: 130,
        sum: 130,
        bought: true
    },
    {
        name: 'oil',
        number: 2,
        price: 55,
        sum: 110,
        bought: false   
    },
    {
        name: 'onions',
        number: 5,
        price: 5,
        sum: 25,
        bought: false
    },
    {
        name: 'potatoes',
        number: 24,
        price: 2,
        sum: 48,
        bought: true
    },
    {
        name: 'bananas',
        number: 3,
        price: 9,
        sum: 27,
        bought: false
    }
]

//#1
shoppingList.sort(function (a, b) {
    if (a.bought > b.bought) {
      return 1;
    }
    if (a.bought < b.bought) {
      return -1;
    }
    return 0;
});
console.log('Shopping list', shoppingList)

//#2
function bought(obj, mean) {
    index = obj.findIndex(product => product.name === mean)
    obj[index].bought = true
} bought(shoppingList, 'water')
  bought(shoppingList, 'meat')
  bought(shoppingList, 'potatoes')
console.log('Bought product', shoppingList)

//norm

//#1
function remove(obj, mean) {
    i = obj.findIndex(product => product.name === mean)
    let add = []
    obj.forEach((element, index) => {
        if (index !== i) {
            add.push(element)
        }
    });
    return add;
}
console.log('Remove the product from the shopping list', remove(shoppingList, 'onions'))

//#2
function add(obj, name, number, price) {
    toAdd = obj.findIndex(product => product.name === name)
    if (toAdd === -1) {
        obj.push({
            name: name,
            number: number,
            price: price,
            sum: number * price,
            bought: false
          
        })
    } else {
        obj[toAdd].number += number
        obj[toAdd].sum = obj[toAdd].sum + number * price
    }
}
add(shoppingList,'pasta', 3, 35)
console.log('Add the product to the shopping list', shoppingList)

//max

//#1
let count = obj => obj.reduce(function (acc, product){ return acc + product.number; }, 0)
console.log('Number of products are: ', count(shoppingList))

//#2

//all bought
function buy(obj) {
    let summary = 0;
    let mass =[]
    obj.map(item => {
     mass.push(item.number*item.price)
    });
    for(let i = 0; i < mass.length; i++){
        summary += mass[i]
    }
    return summary
};
console.log('Summary to buy:', buy(shoppingList));

//all not bought
function buyNot(obj) {
    let summary = 0;
    let mass =[]
    obj.map(item => {
        if( item.bought == false){
         mass.push(item.number*item.price)
        }
    });
    for(let i = 0; i < mass.length; i++){
        summary += mass[i]
    }
    return summary
};
console.log('Summary not to buy:', buyNot(shoppingList));

//#3

function sort(obj, mean) {
    if(mean == 'less'){
        obj.sort(function(a, b) {
            if(a.sum > b.sum){
                return 1
            }
            if(a.sum < b.sum){
                return -1
            }
        })
        return obj
    } 
    if(mean == 'more'){
        obj.sort(function(a, b) {
            if(a.sum < b.sum){
                return 1
            }
            if(a.sum > b.sum){
                return -1
            }
        })
        return obj
    } 
    if(mean == '='){
        obj.sort(function(a, b){
            if(a.sum = b.sum){
                return 0
            }
        })
        return obj
    } 
}
console.log( 'Less>>>', sort(shoppingList, 'less'))
console.log('More<<<', sort(shoppingList, 'more'))

