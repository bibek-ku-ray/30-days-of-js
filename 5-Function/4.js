function product(a, b = 2){
    return a * b
}

console.log(product(5))

function greet(name, age = 30){
    return `Hello ${name}, you are ${age} years old`
}

console.log(greet("John Cena"))