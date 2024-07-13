
/**
 * Activity 5: Understanding const
 * Task 6: Try reassigning a variable declared with const and observe the error.
 */

const num1 = 25;
console.log("number: ",num1);

num1 = 45;
console.log("number: ",num1);

// Output:
/**
 * TypeError: Assignment to constant variable.
 */