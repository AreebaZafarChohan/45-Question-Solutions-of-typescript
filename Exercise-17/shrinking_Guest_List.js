// Shrinking Guest List
// Exercise-16
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
    console.log("\nDear ".concat(guest, ", I am inviting you for dinner. \n     It's a pleasure for me if you will come. So come and join us! "));
}
// Exercise-17 Starts from here 
console.log("\nSorry we can invite only two people for dinner due to unforeseen circumstances.");
// Removing guests from the list 
while (guestList.length > 2) {
    var guestRemoved = guestList.pop();
    console.log("\n Sorry ".concat(guestRemoved, ", I can't invite you for dinner due to unforeseen circumstances."));
}
// Inviting Remaining Guests
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var remainingGuests = guestList_2[_a];
    console.log("\nHey ".concat(remainingGuests, "! You are still invited for dinner. So come and join us!"));
}
// Removing last two guests from the list 
guestList.splice(0);
console.log("\nAfter removing the guests from the list.\nThe list is empty now.");
console.log(guestList);
