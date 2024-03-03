function describe_city(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function 
describe_city("New York");
describe_city("Karachi", "Pakistan");
describe_city("Istanbul", "Turkey");
