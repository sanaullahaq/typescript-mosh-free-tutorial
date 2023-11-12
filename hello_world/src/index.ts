/*console.log('Hello World');  //Break point here to test debug
let age: number = 20;

if (age < 50){
    age += 10
}

console.log(age)
*/
//-------------------------

/*
let sales: number = 123_456_789 //Big number representation
let course: string = 'Typescript'
let is_published: boolean = true
let level;                      //type is any
level = 'abc'
level = 1234
*/
//----------------------------
// TS List
// let numbers = [1, 2, '3'] //valid in JS,
// let numbers: number[] = [1, 2, '3'] //invalid in TS,
// let numbers: number[] = [1, 2, 3]

//-----------------------------
//TS Tuples
// let user: [number, string] = [1, 'Sana']

//-----------------------------
//TS enums
// enum size {small = 1, medium, large}; // small=1, Medium=2, Large=3 auto value set
// let my_size:size = size.large
// console.log(my_size)

// const enum size {small = 1, medium, large} // using const will generate more concise JS code
// let my_size:size = size.large
// console.log(my_size)

//-----------------------------
//function
// function calculate_tax(income: number): number{
//     let x: number =1.2
//     let x2: number =1.3
//     if (income < 50_000){
//         return income*x
//     }
//     return income*x2

// }

//----------------------------
//Objects
// type Employee = {                    //type aliases
//     readonly id: number,
//     name: string,
//     has_fax_machine?: boolean       //optional field
//     retire: (date: Date) => void    //function
// }

// let employee: Employee = {
//     id: 1,
//     name: 'Sanaulla',
//     retire: (date: Date)=> {
//         console.log(date)
//     }
// }
// employee.name = 'Sanaulla Haq'
// console.log(employee)

//----------------------------
//Union (single pipe '|') and Narrowing
// function kgToLbs(weight: number | string): number{
//     //Narrowing
//     if(typeof weight === "number")
//         return weight*2.2
//     else
//         return parseInt(weight)*2.2
// }

// console.log(kgToLbs(10))
// console.log(kgToLbs('10kg'))

//-----------------------------
//Intersection
// type Draggable = {
//     drag: () => void
// }

// type Resizable = {
//     resize: () => void
// }

// type UIWidget = Draggable & Resizable // intersection, the UIWidget is both combination of Draggable and Resizable
// let textBox: UIWidget = {
//     drag() {},
//     resize() {},
//     //so the textBox have to implement all the functions of its type its combined of.
// }

//-----------------------------
// Literal (exact, specific)
// type Quantity = 50 | 100
// let quantity: Quantity = 100    //this value cant be any number except 50 or 100

// type Metric = 'cm' | 'inch'

//-----------------------------
//Nullable check
// function greet(name: string){
// function greet(name: string | null | undefined){
//     if(name)
//         console.log(name.toUpperCase())
//     else
//         console.log('Hola')
// }
// greet(null) //cannot pass null, since null has no method toUpperCase, so null is included in the functions parameter with help of union
//---------------------------
//Optional Check
type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()}
}

//Optional Property access operator
let customer = getCustomer(1)
// console.log(customer?.birthday?.getFullYear())
console.log(customer?.birthday.getFullYear())

let log: any = null
log?.('a') // this line will be executed only when the log is actually referencing to a function