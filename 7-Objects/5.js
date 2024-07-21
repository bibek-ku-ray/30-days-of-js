const book = {
    title: 'Ego is the Enemy',
    author: "Ryan Holiday",
    year: 2016
}

for (const key in book) {
    console.log(key);
    console.log(book[key]);

}