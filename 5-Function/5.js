function repeat(func, num) {
  for (let i = 0; i < num; i++) {
    func();
  }
}

function func(){
    console.log("Hello World");
}

repeat(func, 5);

function higherOrderFunction(valueFunc, resultFunc) {
    return function(x) {
        const value = valueFunc(x);
        return resultFunc(value);
    };
}

function square(n) {
    return n * n;
}

function increment(n) {
    return n + 1;
}

// this return a function.
const squareThenIncrement = higherOrderFunction(square, increment);


console.log(squareThenIncrement(5)); 

