// const raining = true;
// const cold = true;

// if (raining) {
//   console.log("Don't forget your umbrella!");
// }

// if (cold) {
//   console.log("Make sure you pick out a scarf!");
// }

// console.log("Now you're ready to go outside!");

// +++++++++++++++++++++++++++++++++

// const cold = false;

// if (cold) {
//   console.log("Make sure you pick out a scarf!");
// } else {
//   console.log("Short sleeves are fine.");
// }

//++++++++++++++++++++++++++++++++++

// const temperature = 0;

// if (temperature < 0) {
//   console.log("Make sure you pick out a scarf!");
// } else if (temperature < 15) {
//   console.log("Short sleeves won't cut it!");
// } else {
//   console.log("Short sleeves are fine.");
// }

// console.log("Now you're ready to go outside!");

//this is my test line
//+++++++++++++++++++++

// const isCitizen = false;
// const age = 29;

// if (isCitizen && age > 18) {
//   console.log("You are eligible to vote.")
// } else {
//   console.log("Sorry, you can't vote this time.")
// }

//+++++++++++++++

// const temperature = 41;
// const raining = false;

// if (temperature < -40 || temperature > 40) {
//   console.log("Maybe going outside isn't such a great idea…");
// }

// if (!raining) {
//   console.log("Leave your umbrella at home!");
// }

// const whichSchool = function (age)

// {
//   let age = 10
//   // let school = ""
  
//   if(age < 13) {
//     console.log("Elementary school")
//   }
//   if(age >= 13 && age <= 18) {
//     console.log("Secondary school")
//   } else {
//     console.log("Lighthouse Labs")
//   }
// }
//+++++++++++++++++++++++++++++

/* QUIZ REQUIREMENTS
* - Your code should have a variable `x` with a starting value of `1`
* - Your code should include a `while` loop
* - Your `while` loop should have a stop condition
* - Your code should use a conditional statement
* - Your code should increment `x` by `1` each time the loop executes
* - Your code should produce the expected output
* - Your code should not be empty
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/

// var x = 1;

// while (x <= 20) {
//    // check divisibility
//    if (x % 3 === 0 && x % 5 === 0) {
//        console.log("JuliaJames")
//    }
//    else if (x % 3 === 0) {
//        console.log("Julia")
//    }
//    else if (x % 5 === 0) {
//        console.log("James")
//    } else {
//        console.log(x)
//    }
//    // print Julia, James, or JuliaJames
//    x++; 
// }

// ++++++++++++++++++++++++++++++++++++++


// Orbiter transfers from ground to internal power (T-50 seconds)
// Ground launch sequencer is go for auto sequence start (T-31 seconds)
// Activate launch pad sound suppression system (T-16 seconds)
// Activate main engine hydrogen burnoff system (T-10 seconds)
// Main engine start (T-6 seconds)
// Solid rocket booster ignition and liftoff! (T-0 seconds)
// NOTE: "T-50 seconds" read as "T-minus 50 seconds".

// Directions:
// Write a while loop that counts down from 60 seconds and:

// If there's a task being completed, it prints out the task
// If there is no task being completed, it prints out the time as T-x seconds
// Use the task and time descriptions described above.

// Your Code:
// Your output should look like the following:

// T-60 seconds
// T-59 seconds
// T-58 seconds
// ...
// T-51 seconds
// Orbiter transfers from ground to internal power
// T-49 seconds
// ...
// T-3 seconds
// T-2 seconds
// T-1 seconds
// Solid rocket booster ignition and liftoff!

// let num = 60; 

// while (num >= 0) {
  
//   if (num === 50) {
//     console.log("Orbiter transfers from ground to internal power")
//   }

//   else if (num === 31) {
//     console.log("Ground launch sequencer is go for auto sequence start")
//   }

//   else if (num === 16) {
//     console.log("Activate launch pad sound suppression system")
//   }

//   else if (num === 10) {
//     console.log("Activate main engine hydrogen burnoff system")
//   }

//   else if (num === 6) {
//     console.log("Main engine start")
//   }

//   else if (num === 0) {
//     console.log("Solid rocket booster ignition and liftoff!")
//   }

//   else {
//     console.log("T-" + num + " seconds")
//   }

//   num = num - 1; 
// }

// +++++++++++++++++++++++++++++++++++++++


for (let x = 0; x <= 25; x++) {
  for(let y = 0; y <= 99; y++) {
      console.log(x + ", " + y)
  }
}