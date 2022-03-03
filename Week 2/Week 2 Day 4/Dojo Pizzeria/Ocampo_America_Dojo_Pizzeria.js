var pizza1 = {
    crustType: "deep dish",
    sauceType: "traditional",
    cheeses: "mozzarella",
    toppings: ["pepperoni", "sausage"]
};

console.log(pizza1);

var pizza2 = {
    crustType: "hand-tossed",
    sauceType: "marinara",
    cheeses: ["mozzarella", "feta"],
    toppings: ["mushrooms", "olives", "onions"]
};

console.log(pizza2);

var pizza3 = {
    crustType: "thin crust",
    sauceType: "bbq",
    cheeses: "mozzarella",
    toppings: ["chicken"]
};

console.log(pizza3);

var pizza4 = {
    crustType: "gluten-free",
    sauceType: "fat-free tomato",
    cheeses: ["vegan cashew cheese"],
    toppings: ["mushrooms", "olives", "onions"]
};

console.log(pizza4);

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(p1);

