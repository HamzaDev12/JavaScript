// Variables 
// let x
// x= 100
// console.log(x)

// let age =23;
// let proce = 10.00
// let gpa = 2.1

// console.log(`Your age is ${age}`)
// console.log(`Your proce is ${proce}`)
// console.log(`Your gpa is ${gpa}`)
// console.log (typeof age)

// let FirstName = "Hamza "
// let lastName = "Dev"

// console.log(FirstName + " " + lastName)
// console.log (typeof FirstName)

// let online = true

// console.log(`Hamza Online ${online}`)

// let fullname = "Hamza Mustafa"
// let student = true
// let jobtype = "web Developer"

// document.getElementById("p1").textContent = `Your name is ${fullname}`;
// document.getElementById("p2").textContent = `enrolled ${student}`;
// document.getElementById("p3").textContent = `your jobtype is ${jobtype}`;

// let students = 20
// students = students + 2
// students = students - 2
// students = students * 2
// students = students ** 2
// students = students / 2
// students = students % 2
// students *= 4


// console.log(students)

// let result = 2 + 3 / 4 * 4 + (34+1)

// console.log(result)

// let username
// // username = window.prompt("What is your username")
// // console.log(username)

// document.getElementById("mySubmit").onclick = function () {
//     username = document.getElementById("myText").value
//     console.log(username)
// }

// let age = window.prompt("What is your age")
// age = Number(age)
// age +=1
// console.log(age, typeof(age))

// let x = "Hamza"
// let y = 4
// let z = "Hamza Mustafa"

// x = Number(x)
// y = String(y)
// z = Boolean(z)

// console.log (x, typeof(x))
// console.log (y, typeof(y))
// console.log (z, typeof(z))

const pi = 3.14159
let raduis 
let circlecumference 

// raduis = window.prompt("Please enter raduis of a circle")





// document.getElementById("mySubmit").onclick = () => {
//     raduis = document.getElementById("myResult").value
//     raduis = Number(raduis)
//     console.log (circlecumference)
//     circlecumference = 2 * pi * raduis
//     document.getElementById("result").textContent = circlecumference
// }

// counter

const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")
const increase = document.getElementById("increase")
const lblCounter = document.getElementById("lblCounter")
let count = 0

increase.onclick = () =>{
    count ++
    lblCounter.textContent = count
}
decrease.onclick = () =>{
    count --
    lblCounter.textContent = count
}
reset.onclick = () =>{
    count = 0
    lblCounter.textContent = count
}


// let x = -25
// let y = 2
// let z = 20
// let max = Math.max(x, y , z)
// let min = Math.min(x, y , z)

// z = Math.random(x)
// z = Math.floor(x)
// z = Math.sqrt(x)
// z = Math.cos(x)
// z = Math.sin(x)
// z = Math.tan(x)
// z = Math.abs(x)
// console.log(max, min)

// const min = 10
// const max = 100

// let randomNumber = Math.floor(Math.random() * (max - min) + min)
// console.log(randomNumber)


const Myroll = document.getElementById("myroll")
const Mylabel = document.getElementById("myLabel")
const Mylabel1 = document.getElementById("myLabel1")
const Mylabel2 = document.getElementById("myLabel2")

let min = 1
let max = 100

let ramdomNumber
let ramdomNumber1
let ramdomNumber2

Myroll.onclick = () => {
    ramdomNumber = Math.floor(Math.random() * (max - min) + min)
    ramdomNumber1 = Math.floor(Math.random() * (max - min) + min)
    ramdomNumber2 = Math.floor(Math.random() * (max - min) + min)
    Mylabel.textContent = ramdomNumber
    Mylabel1.textContent = ramdomNumber1
    Mylabel2.textContent = ramdomNumber2
}



// if (age >= 18){
//     console.log("You are teenager")
// } else {
//     console.log("You are child")
// }

// let isStudent = false

// if(isStudent){
//     console.log("You are student")
// } else {
//     console.log("You are not student")
// }

const myAge = document.getElementById("myAge");
const MyageSubmit = document.getElementById("myAgeSubmit");
const resultAge = document.getElementById("resultAge");
let age

MyageSubmit.onclick = function(){
    age = myAge.value
    age = Number(age)

    if(age >= 100){
        resultAge.textContent = `You are too old `
    } else if(age == 0){
        resultAge.textContent = `You cant enter`
    } else if(age >= 18){
        resultAge.textContent = `you are old enough to enter`
    } else if(age > 0){
        resultAge.textContent = `Your age can't be less than 0`
    } else {
        resultAge.textContent = `You must enter be 18+ years`
    }
}

const myCheckbox = document.getElementById("myCheckbox")
const visaBtn = document.getElementById("visaBtn")
const masterCard = document.getElementById("masterCard")
const payPalBtn = document.getElementById("payPalBtn")
const sub = document.getElementById("sub")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")

sub.onclick = function() {
    if (myCheckbox.checked){
        subResult.textContent = `You Are subcribed!`
    } else{
        subResult.textContent = `You Are NOT subcribed!`
    }
    if(visaBtn.checked){
        paymentResult.textContent =`you are paying Visa`
    } else if (masterCard.cheked){
        paymentResult.textContent =`you are paying MasterCard`
    } else {
        paymentResult.textContent =`you must be selected first`
    }
}

let da = 18
let fariin = da > 18 ? "yes" : "no"

console.log(fariin)

let time = 12
let greeting = time < 12 ? "Good Morning" : "Good evening"

console.log(greeting)

let amount = 123
let dicount = amount >= 100 ? 10 : 0

console.log(`Your total is $${amount - amount * (discount/100)}`)

let day = 1

switch(day) {
    case 1:
         console.log("Sabti")
        break
    case 2:
        console.log("Axad")
        break
    case 3:
        console.log("Isniin")
        break
    case 4:
        console.log("Salaasa")
        break
    case 5: 
        console.log("Arbaca")
        break
    case 6:
        console.log("Khamiis")
        break
    case 7:
        console.log("Jimce")
        break
    
        default:
        console.log(`${day} is not a day`)
}

let Magac = "Hamza"

console.log(Magac.charAt(0))
console.log(Magac.indexOf(a))
console.log(Magac.lastIndexOf(h))
console.log(Magac.trim())
console.log(Magac.length())


let fullname = "Hamza Mustfa"
let fullName = fullname.slice(0, 4)

let firstname = fullname.slice(0, fullname.indexOf(":"))
let lastname = fullname.slice(fullname.indexOf(":") + 1)

console.log(fullName)
console.log(firstname)
console.log(lastname)