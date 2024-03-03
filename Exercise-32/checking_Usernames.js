var current_users = ["Yaram Kazmi", "Haya Suleman", "Salar Sikander",
    "Faris Ghazi", "Hashim Kardar", "Bazil Sultan"];
var new_users = ["Taliya Murad", "Yaram Kazmi", "Salar Sikander",
    "Adam Bin Muhammad", "Umer Jhangir", "Amaira Sultan"];
var _loop_1 = function (new_user) {
    var userName_Exist = current_users.some(function (user) { return user.toLowerCase() === new_user.toLowerCase(); });
    if (userName_Exist) {
        console.log("Sorry, the username ".concat(new_user, " is not available. Please enter a new username."));
    }
    else {
        console.log("The username ".concat(new_user, " is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
