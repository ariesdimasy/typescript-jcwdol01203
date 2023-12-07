interface IAddress {
    city: string;
    province: string;
}

interface IPerson {
    name: string;
    age: number;
    hobbies: string[],
    address: IAddress
}


let myName: string = "Aries Dimas";
let myAge: number = 32;

// myName = 45

console.log(myName, myAge);

let x: number = 10
let y: number = 15

function add(x: number, y: number): number {
    let result: number = x + y
    return result
}

console.log(add(x, y))

let isMarried: boolean = true
let hobbies: string[] = ["playing CS 1.6", "playing rocket league"]
let numbers: number[] = [1, 2, 3]
let person: IPerson = {
    name: "Dimas",
    age: 32,
    hobbies: hobbies,
    address: {
        city: "tangerang regency",
        province: "banten",
    }
}

let person2: IPerson = {
    name: "Rian",
    age: 32,
    hobbies: ["playing chess"],
    address: {
        city: "surabaya",
        province: "East Java",
    }
}

let person3: IPerson = {
    name: "Daniel",
    age: 32,
    hobbies: ["playing mario kart"],
    address: {
        city: "bandung",
        province: "West Java",
    }
}

let people: IPerson[] = [person, person2, person]

console.log("people => ", people)

let general: any = "General type"

if (general != "") {
    console.log(general)
}

general = true

let anons: (number | string | boolean | IPerson)[] = [person, 1, "dua", true, 4]

console.log("anons => ", anons)

let myType: (number | string) = true
console.log(myType)


