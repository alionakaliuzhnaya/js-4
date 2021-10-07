//every
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every((array) => array % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((array) => !array % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every((array) => array % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((array) => !array % 2 === 0);

const eachElementInThirdIsEven = thirdArray.every((array) => array % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((array) => !array % 2 !== 0);

console.log(firstArray); //это массив [26, 94, 36, 18]
console.log(secondArray); // это массив [17, 61, 23]
console.log(thirdArray); //это массив [17, 26, 94, 61, 36, 23, 18]
console.log(eachElementInFirstIsEven); // это буль true
console.log(eachElementInFirstIsOdd); //  это буль false
console.log(eachElementInSecondIsEven); //  это буль false
console.log(eachElementInSecondIsOdd); // это буль true
console.log(eachElementInThirdIsEven); // это буль false
console.log(eachElementInThirdIsOdd); //это буль false

//hm31
//Дополни функцию isEveryUserActive(users) так,
//чтобы она проверяла все ли пользователи сейчас активны
//(свойство isActive) и возвращала true или false.
// Change code below this line
const isEveryUserActive = (users) => {
  return users.every((user) => user.isActive);
};
// Change code above this line
