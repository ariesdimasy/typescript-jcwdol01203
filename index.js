var myName = "Aries Dimas";
var myAge = 32;
// myName = 45
console.log(myName, myAge);
var x = 10;
var y = 15;
function add(x, y) {
    var result = x + y;
    return result;
}
console.log(add(x, y));
var isMarried = true;
var hobbies = ["playing CS 1.6", "playing rocket league"];
var numbers = [1, 2, 3];
var person = {
    name: "Dimas",
    age: 32,
    hobbies: hobbies,
    address: {
        city: "tangerang regency",
        province: "banten",
    }
};
var person2 = {
    name: "Rian",
    age: 32,
    hobbies: ["playing chess"],
    address: {
        city: "surabaya",
        province: "East Java",
    }
};
var person3 = {
    name: "Daniel",
    age: 32,
    hobbies: ["playing mario kart"],
    address: {
        city: "bandung",
        province: "West Java",
    }
};
var people = [person, person2, person];
console.log("people => ", people);
var general = "General type";
if (general != "") {
    console.log(general);
}
general = true;
var anons = [person, 1, "dua", true, 4];
console.log("anons => ", anons);
var myType = true;
console.log(myType);
