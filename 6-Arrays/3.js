//map
const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const mapArr = arr.map(element => element*2);
console.log(mapArr);

//filter
const filterArr = arr.filter(element => element % 2 === 0);
console.log(filterArr);

//reduce
const reduceArr = arr.reduce((element, total) => element + total, 0);
console.log(reduceArr);