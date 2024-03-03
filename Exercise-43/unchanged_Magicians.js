var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var originalMagicianNames = ["Jack", "Jhon", "David", "Henry", "William"];
// Creating a copy of original array
var copiedMagicianNames = __spreadArray([], originalMagicianNames, true);
// Modifying magician's names 
var great_magicians = make_great(copiedMagicianNames);
// Call the function to show original array
console.log("Original Magicians:");
show_magicians(originalMagicianNames);
// Call the function to show modified array
console.log("\nCopy of Original Magicians with 'the Great':");
show_magicians(great_magicians);
