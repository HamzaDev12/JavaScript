function myFunction (p1, p2) {
    return p1 * p2;
}


let result = myFunction(4, 3)
document.getElementById("demo").innerHTML = result


function greet(name) {
    console.log ("Hello " + name)
}
greet("Hamza")

const Salan = (name) => {
    console.log ("Hello " + name)
}

function add(a , b){
    return a + b
}
console.log (add(3, 4))

add()
function multply(c , d) {
    return c * d
}

let natijo = multply(3, 4)
document.getElementById("demo1").innerHTML = natijo

setTimeout(function() { 
    console.log("This runs after 2 seconds"); 
    }, 2000);

    (function() {
        console.log("This runs after 3 seconds")
    }) ()

function OperationApply (a, b, Apply) {
    return Apply(a, b)
} console.log(OperationApply(10, 5, add))

function Calling(callback){
    setTimeout(() => {
        callback("Hamza: Calling")
    }, 1000);
}

Calling((message)=>{
    console.log(message)
})

function fectorial(n){
    if (n <= 1) return 1
    return n * fectorial(n - 1)
}console.log(fectorial(4))


// Callback Functions

function Hello(callback){
    console.log("Hello")
    callback()
}

function wait(){
    console.log("Waiting")
}

Hello(wait)

function Subtraction(callback, x, y){
    let result = x - y
    callback(result)
}

function display(result){
    console.log(result)
}
Subtraction(DOM, 7, 10)

function DOM(result){
    document.getElementById("myDemo").textContent = result
}

// function test(factor){
//     return function test1(number){
//         return number * factor
//     }
// }

// const test3  = test(2)
// console.log(test3(5))


let compnies = [
    { name: "Hamza", description: "Awner", },
    { name: "Hamza", description: "Awner1", },
    { name: "Hamza", description: "Awner3", },
    { name: "Hamza", description: "Awner4", },
    { name: "Hamza", description: "Awner5", },
    { name: "Hamza", description: "Awner6", },
]

compnies.forEach(function(campany){
    console.log(campany.description)
})

// map

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const doubled = numbers.map((n) => n * 2)
console.log(doubled)

// reduce

const double = numbers.reduce((accumulator ,currentValue, ) => currentValue + accumulator, 0)
console.log(double)

//filter

const double1 = numbers.filter((n) => n % 2 === 0)
console.log(double1)

//for each element
const double2 = numbers.forEach((n) => console.log(n))

// for loop
let num = [1, 2, 3, 4, 5]
// let squareNum = []
// for(let i =0; i < num.length; i++){
//     const square = num[i] * num[i]
//     squareNum.push(square)
// }

let squareNum = num.map ((value) => {
    return value * value
})
console.log(squareNum)

let myNumbers = num.filter((value) =>{
    if(value % 2 != 0){
        return value
    }
})
console.log(myNumbers)

const users =[
    {
        name: 'John',
        role : 'admin'
    },
    {
        name: 'Ahmed',
        role : 'user'
    },
    {
        name : 'Mohamed',
        role : 'user'
    }
]

const onlyAdmins = users.filter((user)=>{
    
    if(user.role === 'admin'){
        return user
    }
})

const onlyUsers = users.filter((user)=>{
    if (user.role === 'user'){
        return user
    }
})
console.log(onlyUsers)
console.log(onlyAdmins)


// Objects

// Literals

const person = {
    name: 'John',
    age : 36
}


// using new object()
const person2 =  new Object()
person2.name = 'Don'
person2.age = 26

console.log(person)
console.log(person2)

console.log(person.name)

person.country = "Somaliland";
console.log(person)

//object within object

let person3 = {
    name: 'John',
    age : 36,
    address: {
        city: 'Hargeisa',
        Country: 'Somaliland'
    }
}

console.log(person3)
console.log(person3.address)

// object within array

let background = {
    name: 'John',
    Hobbies : ['Reading', 'Coding', 'History']
}

console.log(background.Hobbies[1])

// adding method

let myBackground = {
    name: 'Hamza',
    greeting: function (){
        return (`Hello ${myBackground.name}`)
    }
}

console.log(myBackground.greeting())

let myTest = {
    name: 'John',
    address: 'lodon'
}

const {name, address} = myTest
console.log(name)
console.log(address)
console.log(Object.keys(myTest))
console.log(Object.values(myTest))

for (let key in myTest) { 
    console.log(key + ": " + myTest[key])}