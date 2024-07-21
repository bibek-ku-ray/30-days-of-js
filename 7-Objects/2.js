const book = {
    title: 'Ego is the Enemy',
    author: "Ryan Holiday",
    year: 2016,
    titleAndAuthor: function() {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function(newYear) {
        return this.year = newYear;
    }
}
console.log(book.titleAndAuthor());
book.updateYear(2017);
console.log(book)