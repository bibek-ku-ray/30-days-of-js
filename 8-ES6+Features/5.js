const name = "Hornet"
const company = "honda"
const cc = (name) => `The ${name} is a 160cc bike.` 
const bike = {name, company, cc}

console.log(bike);
console.log(bike.cc(bike.name));