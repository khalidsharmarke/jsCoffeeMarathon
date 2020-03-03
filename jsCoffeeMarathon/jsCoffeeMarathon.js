console.log("Coffee please");

let coffeeType = "Medium Roast";
console.log(coffeeType); //passes

var latte = 2;
var mocha = 3;
console.log(latte+mocha); //is 5
console.log(latte > mocha); //is false;
console.log(latte < mocha); //is true;

let sugarFree;
//alert(sugarFree); //alerts undefined;

let customer1 = "Kamala Khan", drinkChoice = "Chai", quantity = 4, foodAllergy = false;
console.log(`${customer1} ${drinkChoice} ${quantity} ${foodAllergy}`);

const chai = 2.5;
let chai = 2;

let total = `Your final order is ${quantity} ${drinkChoice}, for $${quantity * chai}`
alert(total);