function make_Shirt(size : string = "Large", message : string = "I love TypeScript." ): void {
    console.log(`The size of the shirt is ${size} and it has the message: ${message} `)
}

make_Shirt();
make_Shirt("Medium", "I love TypeScript!");
make_Shirt("Large", "I love TypeScript!");