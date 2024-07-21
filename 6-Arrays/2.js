const arr = [23, 3, 4, 5, 56,]
console.log("original: ",arr);

arr.push(99);
console.log("push: ",arr);

arr.pop();
console.log("pop: ",arr);

// remove first element
arr.shift();
console.log("shift: ",arr);

// add element to the beginning of the array
arr.unshift(99)
console.log("unshift",arr);