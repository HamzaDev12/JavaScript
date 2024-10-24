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