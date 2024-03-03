function make_Shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript."; }
    console.log("The size of the shirt is ".concat(size, " and it has the message: ").concat(message, " "));
}
make_Shirt();
make_Shirt("Medium", "I love TypeScript!");
make_Shirt("Large", "I love TypeScript!");
