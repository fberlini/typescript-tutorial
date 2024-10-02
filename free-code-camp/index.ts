// Primitive types
let numberOfWheels: number = 4
let isStudent: boolean = false


// Custom types and Nested Objects
type Food = string

type Address = {
    street: string,
    city: string,
    country: string
}

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address?: Address
}

let person1: Person = {
    name: "Felipe",
    age: 33,
    isStudent: false,
    address: {
        street: "Rua Zike Tuma",
        city: "São Paulo",
        country: "Brazil"
    }
}

let person2: Person = {
    name: "Thais",
    age: 28,
    isStudent: false
}

function displayInfo(person: Person) {
    console.log(`${person.name} lives at ${person.address?.street}`)
}

displayInfo(person2)


// Arrays
let ages = [100, 101]
ages.push(102)

let people: Person[] = [person1, person2]


// Literals
let myName1 = "Felipe"
const myName2 = "Felipe"


// Unions
type UserRole = "guest" | "member" | "admin"
let userRole: UserRole = "admin"