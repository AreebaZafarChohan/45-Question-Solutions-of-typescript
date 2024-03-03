let current_users : string[] = ["Yaram Kazmi", "Haya Suleman", "Salar Sikander",
 "Faris Ghazi", "Hashim Kardar", "Bazil Sultan"];

 let new_users : string[] = ["Taliya Murad", "Yaram Kazmi", "Salar Sikander",
  "Adam Bin Muhammad","Umer Jhangir", "Amaira Sultan"];

  for (let new_user of new_users) {
    let userName_Exist = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());

    if (userName_Exist) {
        console.log(`Sorry, the username ${new_user} is not available. Please enter a new username.`);
    } else {
        console.log(`The username ${new_user} is available.`);
    }
  }