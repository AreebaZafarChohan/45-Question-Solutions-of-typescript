// Function 1 (make_great)
function make_great(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
// Function 2 (show_magicians)
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Make a array of magician's names
var magicianNames = ["Jack", "Jhon", "David", "Henry", "William"];
// Modifying magician's names 
var great_magicians = make_great(magicianNames);
// Call the function
show_magicians(great_magicians);
