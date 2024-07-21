const addTwoNum = (a, b) => a + b;
console.log(addTwoNum(5, 10));

const checkCharacter = (char) => {
    if(char.includes('a')){
        return 'Character includes a';
    } else {
        return 'Character does not include a';
    }
}

console.log(checkCharacter('apple'));