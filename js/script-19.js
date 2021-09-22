const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);

console.log(numbers); // это массив [17, 24, 82, 61, 36, 18, 47, 52, 73]
console.log(evenNumbers); //это массив [24, 82, 36, 18, 52]
console.log(oddNumbers); // это массив [17, 61, 47, 73]
