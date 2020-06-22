
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

//range is an array of 2 nums representing the start and end values for the loop
//multiples is an array of 2 nums representing the multiples you want to replace with words
// words should be an array of 2 strings, representing the words that will replace the multiples 
//example: loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
//function should console.log all the numbers from 15-90, except replacing multiple of 2 with 'Batty' and mult of 5 with "Beacon"--mult 2 & 5 'BattyBeacon'

const loopyLighthouse = (range, multiples, words) => {

}