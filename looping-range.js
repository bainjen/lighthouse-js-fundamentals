//create a function  called range that creates an array given start, end, step parameters
//return an empty array if: 
// start, end, or step being undefined
// start being greater than end
// step being 0, or negative

const range = (start, end, step) => {
  let newArray = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return newArray;
  } else {
    for (let i = start; i <= end; i += step) {
      newArray.push(i);
    }
  }
  return newArray;
}

console.log(range(0, 10, -2));
console.log(range(10, 3, 5));
console.log(range(-5, 2, 3));

