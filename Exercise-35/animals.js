var favouriteAnimals = ["Cow", "Goat", "Rabbit"];
console.log("List of favourite animals:");
for (var i = 0; i < favouriteAnimals.length; i++) {
    console.log(favouriteAnimals[i]);
}
console.log("\nStatements about favourite animals:\n");
for (var _i = 0, favouriteAnimals_1 = favouriteAnimals; _i < favouriteAnimals_1.length; _i++) {
    var favouriteAnimal = favouriteAnimals_1[_i];
    console.log("A ".concat(favouriteAnimal.toLowerCase(), " would make a great pet.\n"));
}
console.log("These animals are cute and innocent and any of these animals would make a great pet!");
