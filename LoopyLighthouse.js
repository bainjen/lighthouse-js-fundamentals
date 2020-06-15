
//first create a loop the prints 100-200, inclusive
//next, pick a condition to start ex. printing 'loopy
//write if statement
//repeat previous step with remaining conditions

//conditions: 
// multiple of 3, print the string "Loopy" instead of the number.
// multiple of 4, print the string "Lighthouse" instead of the number.
// multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log("LoopyLighthouse")
  }
  else if (i % 3 === 0) {
    console.log("Loopy")
  }

  else if (i % 4 === 0) {
    console.log("Lighthouse")
  }
  else {
    console.log(i)
  }
}