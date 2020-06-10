// function multiply(a, b) {
//   return a * b;
// }

// const result = multiply(2, 4);
// console.log(result)

/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
 */
 
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
// var balance = 325.00;
// var checkBalance = true;
// var isActive = false;


// if (checkBalance) {

//   if (isActive && balance > 0) {
//     console.log("Your balance is $" + balance + ".")
//   } else if (!isActive) {
//     console.log("Your account is no longer active.")
//   } else if (isActive && balance === 0) {
//     console.log("Your account is empty.")
//   } else if (balance < 0) {
//     console.log("Your balance is negative. Please contact the bank.")
//   }

// } else {
//   console.log("Thank You. Have a nice day!")
// }


//   if (isActive = true && balance > 0) {
//     console.log("Your balance is $" + balance + ".")
    


// } else if (checkBalance = true && isActive = false) {
//   console.log("Your account is no longer active.")
// } else if ()
// your code goes here

// if (checkBalance = true) {
//     if (isActive = true) {
//         console.log("Your balance is " + balance + ".")
//     } else {
//         if (isActive = false) {
//             console.log("Your account is no longer active")
//         } else if (balance === 0) {
//             console.log("Your account is empty")
//         } else {
//             console.log("Your balance is negative. Please contact bank.")
//         }
//     }
// }


// else { 
//     console.log(Thank you. Have a nice day!)


// var flavor = "vanilla";
// var vessel = "cone";
// var toppings = "sprinkles";

// // Add your code here

// if ((flavor === 'vanilla' || flavor === 'chocolate')
//     && (vessel === 'cone' || vessel === 'bowl')
//   && (toppings === 'sprinkles' || toppings === 'peanuts'))
//   {
//     console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".")
// }

// var flavor = "vanilla";
// var vessel = "cone";
// var toppings = "sprinkles";

// // Add your code here

// if ((flavor === 'vanilla' || flavor === 'chocolate')
//     && (vessel === 'cone' || vessel === 'bowl')
//   && (toppings === 'sprinkles' || 'peanuts'))
//   {
//     console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".")
// }

  //Size	Width	Length	Sleeve
  //S	18"	28"	8.13"
  //M	20"	29"	8.38"
  //L	22"	30"	8.63"
  //XL	24"	31"	8.88"
  //2XL	26"	33"	9.63"
  //3XL	28"	34"	10.13"

// var shirtWidth = 23;
// var shirtLength = 30;
// var shirtSleeve = 8.71;

/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
*/

// WRITE YOUR CODE HERE

//   if ((shirtWidth >= 18 && shirtWidth < 20)
//   && (shirtLength >= 28 && shirtLength < 29)
//   && shirtSleeve >= 8.13 && shirtSleeve < 8.38) {
//   console.log('S');
// } 
//   else if ((shirtWidth >= 20 && shirtWidth < 22)
//   && (shirtLength >= 29 && shirtLength < 30)
//   && shirtSleeve >= 8.38 && shirtSleeve < 8.63) {
//   console.log('M');
// } 
//   else if ((shirtWidth >= 22 && shirtWidth < 24)
//   && (shirtLength >= 30 && shirtLength < 31)
//   && shirtSleeve >= 8.63 && shirtSleeve < 8.88) {
//   console.log('L');
// } 
//   else if ((shirtWidth >= 24 && shirtWidth < 26)
//   && (shirtLength >= 31 && shirtLength < 33)
//   && shirtSleeve >= 8.88 && shirtSleeve < 9.63) {
//   console.log('XL');
// } 
//   else if ((shirtWidth >= 26 && shirtWidth < 28)
//   && (shirtLength >= 33 && shirtLength < 34)
//   && shirtSleeve >= 9.63 && shirtSleeve < 10.13) {
//   console.log('2XL');
// } 
//   else if ((shirtWidth >= 28)
//   && (shirtLength >= 34)
//   && shirtSleeve >= 10.13) {
//   console.log('3XL');
// } 
//   else {
//     size = "NA"
//   }

var education = 'no high school diploma';

var salary = 0;

switch (education) {
  case "no high school diploma":
      salary = 25,636;
      console.log("In 2015, a person with " + education + " earned an average of " + "$" + salary + "/year.");
      break; 
      
  case "a high school diploma":
      salary = 35,256;
      console.log("In 2015, a person with " + education + " earned an average of " + "$" + salary+ "/year.");
      break; 
      
  case "an Associate's degree":
      salary = 41,496;
      console.log("In 2015, a person with " + education + " earned an average of " + "$" + salary + "/year.");
      break; 
      
  case "a Bachelor's Degree":
      salary = 59,124;
      console.log("In 2015, a person with " + education + " earned an average of " + "$" + salary + "/year.");
      break; 
      
  case "a Master's degree":
      salary = 69,732;
      console.log("In 2015, a person with " + education + " earned an average of " + "$" + salary + "/year.");
      break; 
      
  case "a Professional degree":
      salary = 89,960;
      console.log("In 2015, a person with " + education + " earned an average of " + "$" + salary + "/year.");
      break; 
      
  case "a Doctoral degree":
      salary = 84,396;
      console.log("In 2015, a person with " + education + " earned an average of " + "$" + salary + "/year.");
      break; 
}
