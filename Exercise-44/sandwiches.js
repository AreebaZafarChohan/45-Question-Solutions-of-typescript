function make_sandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    if (ingredients.length === 0) {
        console.log("No items selected. Please choose some ingredients for your sandwich.\n");
    }
    else {
        console.log("Your Sandwich Order:");
        console.log("Ingredients: ".concat(ingredients.join(", ")));
        console.log("Enjoy your sandwich!");
        console.log(".......................");
    }
}
// Call the function 
make_sandwich();
make_sandwich("Beef", "Cheese", "Pickles");
make_sandwich("Chicken", "Tomato", "Mayonnaise", "Lettuce", "Fried Egg");
make_sandwich("Beef", "Onion");
