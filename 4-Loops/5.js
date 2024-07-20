let i;
for (i = 1; i <= 10; i++) {
    if(i == 5){
        continue;
    } else {
        console.log(i);
    }

}
console.log("-------------------");

let j;
for (j = 1; j <= 10; j++) {
    if(j == 7){
        break;
    } else {
        console.log(j);
    }
}