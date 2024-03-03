var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favouritePlaces = ["Disney land", "South Korea", "Paris", "Hunza", "Kashmir"];
// Print original array of favourite places
console.log("\nI want to visit these places");
console.log(favouritePlaces);
// Print alphabetic order array of favourite places without modifiying the actual list 
console.log("\nMy favourite places to visit in alphabetic order without modifiying the actual list ");
console.log(__spreadArray([], favouritePlaces, true).sort());
// My array is still in its original order 
console.log("\nMy favourite places to visit in original order");
console.log(favouritePlaces);
// Print array in reverse alphabetic order without changing the order of the original list 
console.log("\nMy favourite places to visit in alphabetic reverse order without changing the order of the original list ");
console.log(__spreadArray([], favouritePlaces, true).sort().reverse());
// My array is still in its original order 
console.log("\nMy favourite places to visit in original order");
console.log(favouritePlaces);
// Reverse the order of the array 
console.log("\nMy favourite places to visit in reverse order");
console.log(favouritePlaces.reverse());
// Reverse order again, back to its original order 
console.log("\nMy favourite places to visit in reverse order again. Back to its original order");
console.log(favouritePlaces.reverse());
// sort array in alphabetical order.
console.log("\nMy favourite places to visit in alphabetic order.");
console.log(favouritePlaces.sort());
// array in reverse alphabetic order again
console.log("\nMy favourite places to visit in alphabetic reverse order again");
console.log(favouritePlaces.sort().reverse());
