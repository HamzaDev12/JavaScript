function myFunction (p1, p2) {
    return p1 * p2;
}

let result = myFunction(4, 3)
document.getElementById("demo").innerHTML = result

function greet(name) {
    console.log ("Hello " + name)
}

const Salan = (name) => {
    console.log ("Hello " + name)
}

function add(a , b){
    return a + b
}
console.log (add(3, 4))

function multply(c , d) {
    return c * d
}

let natijo = multply(3, 4)
document.getElementById("demo1").innerHTML = natijo

setTimeout(function() { 
    console.log("This runs after 2 seconds"); 
    }, 2000);