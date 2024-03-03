let favouritePizzas : string[] = ["Afghani", "Fajita", "Double Cheese"];

// Printing names of pizzas 
console.log("List of my favourite pizzas:")
for (let pizza of favouritePizzas) {
    console.log(pizza);
}

// Printing sentence about each pizza 
console.log("\nStatements about my favourite pizzas:\n");
for (let myFavouritePizza of favouritePizzas) {
    console.log(`I like ${myFavouritePizza} Pizza.\n`);
}

// Additional sentence expressing love for pizza 
console.log(`Pizzas is like my first love. The taste of Afghani pizza and the toppings of Fajita pizza ufff,
I enjoyed it a lot and stretchiness of Double Cheese pizza,
when i had a first bite of pizza it taste like a heaven. I really love pizza!`)