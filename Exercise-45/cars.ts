function make_car (manufacturer : string , modelName : string , ...extraInfo : { [key : string] : any }[] ): object {
    const car : {manufacturer : string , modelName : string , [key : string]: any } = {
        manufacturer : manufacturer ,
        modelName : modelName ,
        ...extraInfo.reduce((acc , value) => ({...acc, ...value}),{})
    };
    return car;

} 


const myCar = make_car("Toyota", "Corolla", {"Color" : "White"}, {"Year" : 2023} , {"PKR" : "75.5 lacs"});
const myCar2 = make_car("Ferrari", "812 Superfast", {"Color" : "Red"}, {"Year" : 2023}, {"PKR" : "75 crore"});

// Call the function 
console.log(myCar);
console.log(myCar2);
