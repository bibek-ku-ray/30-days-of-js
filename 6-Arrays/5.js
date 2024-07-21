const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log("original: ", arr);
let str = ""
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        str += arr[i][j];
    }
    console.log(str);
    str = ""
}

arr.forEach(row => {
    console.log(row.join(' '));
});

console.log(arr[2][0]);