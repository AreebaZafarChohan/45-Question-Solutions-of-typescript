function make_sandwich(...ingredients : string[]): void {
        if (ingredients.length === 0) {
            console.log("No items selected. Please choose some ingredients for your sandwich.\n")
    } else {
        console.log("Your Sandwich Order:");
        console.log(`Ingredients: ${ingredients.join(", ")}`);
        console.log("Enjoy your sandwich!");
        console.log(".......................");

    }
}

// Call the function 
make_sandwich();
make_sandwich("Beef","Cheese","Pickles");
make_sandwich("Chicken","Tomato","Mayonnaise","Lettuce","Fried Egg");
make_sandwich("Beef","Onion");
