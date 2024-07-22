const arr = [1, 3 , 5, 6, 7, 8]
const [firstElement, secondElement, ...all] = arr

console.log(firstElement)
console.log(secondElement)
console.log(all)

const book = {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    year: 2000
}

const {title, year} = book
console.log(title);
console.log(year);