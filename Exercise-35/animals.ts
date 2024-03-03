let favouriteAnimals : string[] = ["Cow", "Goat", "Rabbit"];

// Printing animal names 
console.log("List of favourite animals:");
for (let i = 0; i < favouriteAnimals.length ; i++) {
    console.log(favouriteAnimals[i]);
}

// Printing sentence about each animal
console.log("\nStatements about favourite animals:\n");
for (let favouriteAnimal of favouriteAnimals) {
    console.log(`A ${favouriteAnimal.toLowerCase()} would make a great pet.\n`);
}

// Additional sentence stating common characteristic 
console.log("These animals are cute and innocent and any of these animals would make a great pet!");
