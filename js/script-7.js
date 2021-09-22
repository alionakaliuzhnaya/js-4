function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line
  firstArray.forEach(function (array, index, firstArray) {
    if (secondArray.includes(array)) {
      commonElements.push(array);
    }
  });

  //for (let i = 0; i < firstArray.length; i += 1) {
  //if (secondArray.includes(firstArray[i])) {
  //commonElements.push(firstArray[i]);
  //}
  //}

  return commonElements;
  // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 4])); //[2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //[1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //[10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []
