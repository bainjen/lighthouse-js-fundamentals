// const howManyHundreds = num => {

//    if (num % 100 === 0) {
//      return num/100
//    } else {
//     return Math.floor(num/100)
//    }
  
// }


const howManyHundreds = num => {

  const someNum = num % 100 === 0 ? num / 100 : Math.floor(num / 100); 

  return someNum;

  }
 
console.log(howManyHundreds(73400));
//we want to see how many full 100s are in a number, so 588 would output 5 .