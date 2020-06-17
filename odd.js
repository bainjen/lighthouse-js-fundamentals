const isOdd = function (num) {
  return num % 2 === 0 ? false : true
}

console.log(isOdd(3));
console.log(isOdd(4));

const isOddAgain = function (num) {
  return num % 2 !== 0;
}

console.log(isOddAgain(9));
console.log(isOddAgain(6));
