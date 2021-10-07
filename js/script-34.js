//Метод reduce()
//Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх.
//Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;

console.log(playtimes); // это массив [1270, 468, 710, 244]
console.log(totalPlayTime); // это число 2692
console.log(averagePlayTime); // это число 673

//hm35
//Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён.
//Рассчитать время для каждого из игроков, можно разделив его время(свойство playtime) на количество игр(свойство gamesPlayed).

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((average, player) => {
  return average + player.playtime / player.gamesPlayed;
}, 0);

console.log(totalAveragePlaytimePerGame); // это число 1023

//hm36
// Change code below this line
const calculateTotalBalance = (users) => {
  return users.reduce((total, user) => {
    return total + user.balance;
  }, 0);
};
console.log(calculateTotalBalance(users));
// Change code above this line

//hm37
//Дополни функцию getTotalFriendCount(users)
//так, чтобы она считала и возвращала общее количество друзей(свойство friends) всех пользователей из массива users.

// Change code below this line
const getTotalFriendCount = (users) => {
  return users.reduce((total, user) => {
    return total + user.friends.length;
  }, 0);
};
// Change code above this line
console.log(getTotalFriendCount(users));
