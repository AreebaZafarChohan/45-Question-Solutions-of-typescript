function describe_city(city : string , country : string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function 

describe_city("New York");
describe_city("Karachi","Pakistan");
describe_city("Istanbul","Turkey");