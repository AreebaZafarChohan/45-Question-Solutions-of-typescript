// Passing Version 
let alienColor : string = "green";

if (alienColor === "green") {
    console.log("Congratulations! You just earned 5 points.");
}

// Failing Version 
 alienColor = "red";

 if (alienColor === "green") {
    console.log("Congratulations! You just earned 5 points.");
 }

 // Since alienColor is "red" , this if statement will not be executed and there will be no output.