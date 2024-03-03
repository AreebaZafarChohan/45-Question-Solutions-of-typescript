var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function make_car(manufacturer, modelName) {
    var extraInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraInfo[_i - 2] = arguments[_i];
    }
    var car = __assign({ manufacturer: manufacturer, modelName: modelName }, extraInfo.reduce(function (acc, value) { return (__assign(__assign({}, acc), value)); }, {}));
    return car;
}
var myCar = make_car("Toyota", "Corolla", { "Color": "White" }, { "Year": 2023 }, { "PKR": "75.5 lacs" });
var myCar2 = make_car("Ferrari", "812 Superfast", { "Color": "Red" }, { "Year": 2023 }, { "PKR": "75 crore" });
// Call the function 
console.log(myCar);
console.log(myCar2);
