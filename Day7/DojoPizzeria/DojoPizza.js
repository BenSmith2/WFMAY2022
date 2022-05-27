// function sandwichFactory(bread, protein, cheese, toppings) {
//     var sandwich = {};
//     sandwich.bread = bread;
//     sandwich.protein = protein;
//     sandwich.cheese = cheese;
//     sandwich.toppings = toppings;
//     return sandwich;
// }
    
// var s1 = sandwichFactory("white", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);







function pizzaOven(crust, sauce, cheese, topping) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.topping = topping;
    return pizza;
}

var p1 = pizzaOven()

var crust = [
    'pan',
    'hand-tossed',
    'thin-crust'
];

var sauce = [
    "marinara",
    "alfredo",
    "pesto",
    "bbq",
    "ranch"
];

var cheese = [
    "mozezarella",
    "cheddar",
    "provolone",
    "parmigiano-reggiano",
    "pecorino-romano",
    "goat cheese"
];

var topping = [
    "extra cheese",
    "pepperoni",
    "sausage",
    "banana peppers",
    "hot peppers",
    "bacon",
    "mushroom",
    "jalepeno",
    "chicken",
    "pineapple",
    "pork",
    "ranch",
    "onions",
    "anchovies"
];

function randomIndex(array) {
    var index = Math.floor(Math.random() * array.length);
    return array[index];
}

function maxToppings() {
    return Math.floor(Math.random() * 3)+1;
}

function rPie() {
    var pizza = {};
    pizza.crust = randomIndex(crust);
    pizza.sauce = randomIndex(sauce);
    pizza.cheese = randomIndex(cheese);
    pizza.topping = [];
    for (var i = 0; i < maxToppings(); i++){
        pizza.topping.push(randomIndex(topping));
    }
    return pizza;
}


console.log(rPie())