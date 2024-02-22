function fillArray(arrayLength) {
    let array = [];
    for (let index = 0; index < arrayLength; index++) {
        array.push(randomNumber());
    }  
    return array; 
}

console.log(fillArray(5));
