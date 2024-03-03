// Passing Version 
var alienColor = "red";
if (alienColor === "red") {
    console.log("Congratulations! You just earned 5 points.");
}
// Failing Version 
alienColor = "green";
if (alienColor === "red") {
    console.log("Congratulations! You just earned 5 points.");
}
// Since alienColor is "green" , this if statement will not be executed and there will be no output.
