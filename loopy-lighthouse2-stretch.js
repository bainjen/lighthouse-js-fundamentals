//a function called loopyLighthouse(range, multiples, words)
// loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
// loopyLighthouse function should log to the console all the numbers from 15 to 90, except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon".

const loopyLighthouse = (range, multiples, words) => {

  let numOne = range[0]; 
  let numTwo = range[1];
  let multOne = multiples[0];
  let multTwo = multiples[1];
  let numList = []
  let wordOne = words[0];
  let wordTwo = words[1];

  for (let x = numOne; x <= numTwo; x++) {
    numList.push(x);
  }

  for (let i = 0; i < numList.length; i++) {
    if (numList[i] % multOne === 0 && numList[i] % multTwo === 0) {
      console.log(wordOne + wordTwo);
    } else if (numList[i] % multOne === 0) {
      console.log(wordOne);
    } else if (numList[i] % multTwo === 0) {
      console.log(wordTwo);
    } else {
      console.log(numList[i]);
    }
    
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);



// printNumRange([5, 13]);