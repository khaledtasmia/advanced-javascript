const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for(let i = 0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

//map
const result = numbers.map(function(element){
    return element * element;
})
console.log(result);

//filter
const result1 = numbers.filter(function(elements){
    return elements>5;
})
console.log(result1);

//find
const result2 = numbers.find(function(x){
    return x<5;
})
console.log(result2);