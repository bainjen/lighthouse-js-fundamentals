//build a function that determines the last index of an item in an array
//when this function in given an array and a value, it should return the index of the last time the value occurs
//if value never occurs, function should return -1
// array = [2, 4, 6, 8, 10];
// console.log(array.indexOf(10));



const lastIndexOf = (array, value) => {
  return value ? array.lastIndexOf(value) : -1;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);