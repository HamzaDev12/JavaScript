// function myFunction(p1, p2) {
//     return p1 * p2;
// }
// let result = myFunction(1, 2) 

// document.getElementById("myFunction").textContent = result

// console.log(result)

// const numbers = [1, 2, 3, 4, 5]
// const double = numbers.map(function(numbers){
//     return numbers * 2 
// })
// document.getElementById("double").innerHTML = double
// console.log (double)

// const num = [1,2,3,4,5]

// const evenNumber = num.filter(number => number % 2 === 0)
// console.log (evenNumber)

// document.getElementById("even").innerHTML = evenNumber

// function createMultiplier(factor) {
//     return function(number) {
//       return number * factor;
//     };
//   }
  
//   const doubled = createMultiplier(2);
//   console.log(doubled(5)); 
  
//   const triple = createMultiplier(3);
//   console.log(triple(5));

//   const student = [
//     {
//         name : "Hamza" ,
//         grade : 99
//     },
//     {
//         name : "Mustafa" ,
//         grade : 100
//     },
//     {
//         name: "idiris",
//         grade : 80
//     }
//   ]

// student.sort((a, b) => b.name - a.name)
// console.log(student)
// const topstudent = student.find(student => student.grade <= 100)
// console.log(topstudent)  

// const Fruits = ['Banana', 'Banana', 'Banana', 'apple', 'apple', 'orange', 'orange', 'watermilon', 'orange']

// const count = Fruits.reduce((acc, Fruits) => {
//     acc[Fruits] = (acc[Fruits] || 0 ) + 1
//     return acc
// }, {})
// console.log(count)

// const person = [
//     {
//         name : 'John',
//         age : 21,
//         address : ' san Francisco '
//     }
// ]

// document.getElementById('name').textContent = student.name + ' is' + student.grade + 'Years Old '  

const person = {
   firstName : 'John',
   lastName : 'Doe',
   Address : 'San Francisco'  ,  
   fullName : function(){
        return (this.firstName + ' ' + this.lastName + " " + this.Address) .toUpperCase()
   }
}
document.getElementById('name').innerHTML = person.fullName()

let object = JSON.stringify(person)

console.log(object)

function Hamza (name, age, address) {
    this.firstName = name
    this.age = age
    this.address = address
}

const People = new Hamza('Hamza', 18, ' Hargeisa, Somliland ')
console.log(People)

for (let i = 0; i => 10, i++;) {
    console.log(i)
}
