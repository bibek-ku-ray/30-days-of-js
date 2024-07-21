function checkOddEven(number){
    if(number % 2 === 0){
        return 'Even';
    }
    return 'Odd';
}

function square(number){
    return number * number;
}

console.log(checkOddEven(5));
console.log(square(5));