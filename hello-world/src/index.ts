// Primituve types
let sales: number = 123_456_789;
let course: string = 'Typescript'
let is_published : boolean = true

// Funciton arguments
function render(document: string) {
    console.log(document)
}

// Array
let numbers: number[] = [1, 2, 3]

// Tuples
let user: [number, string] = [1, 'Felipe']

// Enums
const enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium
console.log(mySize)

// Functions
function calculateTax(income: number, taxYear = 2022): number {
    return income * taxYear;
}
calculateTax(10_000, 2023)

// Objects
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: '',
    retire: (date: Date) => { console.log(date) }
}

employee.name = 'Felipe'

// Unions
function KgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2
    }
    else {
        return parseInt(weight) * 2.2
    }
}

KgToLbs(10)
KgToLbs('10')

// Intersection
type Draggable = {
    drag: () => void
}

type Resizeble = {
    resize: () => void
}

type  UIWidget = Draggable & Resizeble

const uiWidget: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// Literal types (exact, specific)
type Quantity = 50 | 100
let quantity: Quantity = 50

// Nullable types
function greet(name : string | null) {
    if(name)
        console.log(name.toUpperCase())
    else
        console.log("Hi!")
}

greet(null)