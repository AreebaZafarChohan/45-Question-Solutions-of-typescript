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
const magicianNames : string[] = ["Jack", "Jhon", "David", "Henry", "William"];

// Modifying magician's names 
const great_magicians = make_great(magicianNames);

// Call the function

show_magicians(great_magicians);


