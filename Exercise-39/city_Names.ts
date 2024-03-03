function city_country(city : string , country : string): string {
    return `${city}, ${country}`;
}

// Call the function and print its return value 

// Location 1:
const location1 : string = city_country("Islamabad", "Pakistan");
console.log(location1);

// Location 2:
const location2 : string = city_country("Istanbul", "Turkey");
console.log(location2);

// Location 3:
const location3 : string = city_country("Paris", "France");
console.log(location3);