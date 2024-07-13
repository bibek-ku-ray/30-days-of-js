/**
 * Activity 3: Data Types
 * Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
 */

const name = "John Cena";
const age = 25; 
const isMarried = true;
const fruit = {
    name: "Apple",
    color: "Red",
    price: 100
}
const arr = [1,2,3,4,5];

console.log("type of name: ",typeof(name));
console.log("type of age: ",typeof(age));
console.log("type of isMarried: ",typeof(isMarried));
console.log("type of fruit: ",typeof(fruit));
console.log("type of arr",typeof(arr));

/**
 * Output:
 * type of name:  string
 * type of age:  number
 * type of isMarried:  boolean
 * type of fruit:  object
 * type of arr object
 * 
 */