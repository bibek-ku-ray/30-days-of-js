const arr = [1, 3 , 5, 6, 7, 8]

const fruit = [...arr, 'banana', 'apple', 'orange']
console.log(fruit);

function sum(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0)
}

console.log(sum(arr));