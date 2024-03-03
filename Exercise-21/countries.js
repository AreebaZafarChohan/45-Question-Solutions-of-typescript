var countries = {
    "Pakistan": {
        capital: "Islamabad",
        food: "Nihari",
        language: "Urdu",
        religion: "Islam"
    },
    "China": {
        capital: "Beijing",
        food: "Peking Duck",
        language: "Chinese",
        religion: "Buddhism"
    },
    "South Korea": {
        capital: "Seoul",
        food: "Kimchi",
        language: "Korean",
        religion: "Buddhism"
    },
    "Saudi Arabia": {
        capital: "Riyadh",
        food: "Mandi",
        language: "Arabic",
        religion: "Islam"
    },
    "Turkey": {
        capital: "Ankara",
        food: "Manti",
        language: "Turkish",
        religion: "Islam"
    },
};
console.log("Information about some countries:");
for (var country in countries) {
    console.log("\n".concat(country, " : \n    Capital (").concat(countries[country].capital, "),\n    Food (").concat(countries[country].food, "),\n    Language (").concat(countries[country].language, "),\n    Religion (").concat(countries[country].religion, ") "));
}
