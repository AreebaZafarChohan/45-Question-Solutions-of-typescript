let countries :{ [ key : string] : {
    capital : string ,
    food : string ,
    language : string ,
    religion : string    
} } = {
    "Pakistan" : {
        capital : "Islamabad" ,
        food : "Nihari" ,
        language : "Urdu" ,
        religion : "Islam"
    } ,
    "China" : {
        capital : "Beijing" ,
        food : "Peking Duck" ,
        language : "Chinese" ,
        religion : "Buddhism"
    } ,
    "South Korea" : {
        capital : "Seoul" ,
        food : "Kimchi" ,
        language : "Korean" ,
        religion : "Buddhism"
    } ,
    "Saudi Arabia" : {
        capital : "Riyadh" ,
        food : "Mandi" ,
        language : "Arabic" ,
        religion : "Islam"
    } ,
    "Turkey" : {
        capital : "Ankara" ,
        food : "Manti" ,
        language : "Turkish" ,
        religion : "Islam"
    } ,

};

console.log("Information about some countries:")
for (let country in countries) {
    console.log(`\n${country} : 
    Capital (${countries[country].capital}),
    Food (${countries[country].food}),
    Language (${countries[country].language}),
    Religion (${countries[country].religion}) `) 
}