// Changing Guest List
var guestList = ["Imama", "Kainat", "Amaira", "Rooh-e-Noor"];
console.log("".concat(guestList[3], " will not coming due to her illness"));
// Remove guest can't make it
var canNotMakeGuest = guestList.pop();
var newGuest = "Laila";
// add new guest 
guestList.push(newGuest);
console.log("New Invitations for Dinner:");
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("\nDear ".concat(guest, ", I am inviting you for dinner. \n    It's a pleasure for me if you will come. So come and join us! "));
}
