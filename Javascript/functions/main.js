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