/**
 * 
 */

const library = {
    location: "Kathmandu",
    books: [
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
        },
        {
            title: "Ego is the Enemy", 
            author: "Ryan Holiday",
        } 
    ]
}

console.log(library);

const location = library.location;
const bookTitle = library.books.map(book => book.title);

console.log(location);
console.log(bookTitle);