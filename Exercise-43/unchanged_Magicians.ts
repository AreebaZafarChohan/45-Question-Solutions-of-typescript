// Function 1 (make_great)
function make_great(magicians : string[]): string[] {
    return magicians.map( magician => `${magician} the Great`);

}

// Function 2 (show_magicians)
function show_magicians(magicians : string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }

}
    // Make a array of magician's names
const originalMagicianNames : string[] = ["Jack", "Jhon", "David", "Henry", "William"];

// Creating a copy of original array
const copiedMagicianNames : string[] = [...originalMagicianNames];

// Modifying magician's names 
const great_magicians = make_great(copiedMagicianNames);

// Call the function to show original array
console.log("Original Magicians:");
show_magicians(originalMagicianNames);

// Call the function to show modified array
console.log("\nCopy of Original Magicians with 'the Great':")
show_magicians(great_magicians);


