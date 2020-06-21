let udaciFamily = ["Julia", "James", "Jennifer"];
console.log(udaciFamily);

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

let crew = [captain, second, pilot, companion, mercenary, mechanic];

console.log(crew);

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

 prices[0] = 3.00;
 prices[2] = 200.89;
 prices[6] = 0.99;

console.log(prices);

// model rainbow-->var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(2, 1, "Yellow", "Green");
rainbow.splice(5, 0, "Purple"); 

console.log(rainbow);

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(team) {
  return team.length >= 7 ? true : false; 

}

console.log(hasEnoughPlayers(team));

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

crew.push(doctor, sister, shepherd);
console.log(crew); 

//use .forEach() method to loop over test array
//add 100 to each val that is divisible by 3

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

test.forEach(function(item, index) {
  
  (item % 3 === 0 ? test[index] += 100 : item);
 

});
console.log(test);


// function addHundred(num) {
//   let num = numArray[i];
//   return (num % 3 === 0 ? num += 100 : num);
// }

// console.log(addHundred(test));

//directions: use map() method to take array of bill amounts and create second array of numbers called totals
//totals shows bill amt + 15% tip
//print new totals using console.log
//.tofixed() helps with roudning
  // var decimal = parseFloat(amount); 
  // return decimal; 
  // var numAmounts = parseFloat(amount);
  // return numAmounts;
  

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

var totals = bills.map(function (amount) {
  amount *= 1.15;
  return Number(amount.toFixed(2));
 

})

console.log(totals);

// console.log(parseFloat(totals));

//directions: use a NESTED FOR LOOP to take numbers array  and replace even numbers with stting 'even' and all od numbers with 'odd'

var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// var evenOdds = numbers.map(function (num) {
//   for (let row = 0; row < numbers.length; row++) {
//     for (let col = 0; col < numbers.length; col++) {
//       if (num % 2 === 0) {
//         return "even"
//       } else {
//         return "odd";
//       }
    
//     }
//   } 
  
// })

// console.log(evenOdds);

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i][j] % 2 === 0) {
        numbers[i][j] = "even"; 
      } else {
        numbers[i][j] = "odd";
      }
    }
  }

console.log(numbers);

