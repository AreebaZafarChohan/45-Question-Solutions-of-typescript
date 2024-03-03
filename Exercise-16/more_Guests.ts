// More Guests

// Exercise-15

let guestList : string[] = ["Imama", "Kainat", "Amaira", "Rooh-e-Noor"];

// Remove guest can't make it
let canNotMakeGuest : string | undefined = guestList.pop();

let newGuest : string = "Laila";

// add new guest 
guestList.push(newGuest);

// Exercise-16 work starts from here 

// Informing friends about the big dinner table 
console.log("Hey Dear friends! We found a big dinner table!")

// add new guest to the beginning

let newGuestAtBeginning: string = "Taliya";
guestList.unshift(newGuestAtBeginning);

// add new guest to the middle of array 

let newGuestInMiddle : string = "Sara";
guestList.splice(3,0,newGuestInMiddle);

// add new guest at the end 

let newGuestAtEnd : string = "Areeba";
guestList.push(newGuestAtEnd);

// new set of invitations 

for (let guest of guestList) {
    console.log(`\nDear ${guest}, I am inviting you for dinner. 
    It's a pleasure for me if you will come. So come and join us! `)
}



