// Changing Guest List

let guestList : string[] = ["Imama", "Kainat", "Amaira", "Rooh-e-Noor"];

console.log(`${guestList[3]} will not coming due to her illness`);

// Remove guest can't make it
let canNotMakeGuest : string | undefined = guestList.pop();

let newGuest : string = "Laila";

// add new guest 
guestList.push(newGuest);

console.log("New Invitations for Dinner:");

for (let guest of guestList) {
    console.log(`\nDear ${guest}, I am inviting you for dinner. 
    It's a pleasure for me if you will come. So come and join us! `)
}



