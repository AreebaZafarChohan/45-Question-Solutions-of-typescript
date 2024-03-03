// More Guests
// Exercise-15
var guestList = ["Imama", "Kainat", "Amaira", "Rooh-e-Noor"];
// Remove guest can't make it
var canNotMakeGuest = guestList.pop();
var newGuest = "Laila";
// add new guest 
guestList.push(newGuest);
// Exercise-16 work starts from here 
// Informing friends about the big dinner table 
console.log("Hey Dear friends! We found a big dinner table!");
// add new guest to the beginning
var newGuestAtBeginning = "Taliya";
guestList.unshift(newGuestAtBeginning);
// add new guest to the middle of array 
var newGuestInMiddle = "Sara";
guestList.splice(3, 0, newGuestInMiddle);
// add new guest at the end 
var newGuestAtEnd = "Areeba";
guestList.push(newGuestAtEnd);
// new set of invitations 
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("\nDear ".concat(guest, ", I am inviting you for dinner. \n    It's a pleasure for me if you will come. So come and join us! "));
}
