//create a breakfast object
// The Lumberjack - $9.95
// eggs, sausage, toast, hashbrowns, pancakes
// The object should contain properties for the name, price, and ingredients.

let breakfast = {
  name: "The Lumberjack", 
  price: 9.95,
  ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
}

console.log(breakfast);

//add a printAccountSummary() method that returns the following account message:
//Welcome!
// Your balance is currently $1000 and your interest rate is 1%.

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `savingsAccount` 
 * - Your `savingsAccount` object should have the `balance` and `interestRatePercent` property
 * - Your `savingsAccount` object should have a `printAccountSummary()` method
 * - Your `printAccountSummary()` method should return the EXACT expected message
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */

//my attempt: 
// var savingsAccount = {
//   balance: 1000,
//   interestRatePercent: 1,
//   deposit: function addMoney(amount) {
//     if (amount > 0) {
//       savingsAccount.balance += amount;
//     }
//   },
//   withdraw: function removeMoney(amount) {
//     var verifyBalance = savingsAccount.balance - amount;
//     if (amount > 0 && verifyBalance >= 0) {
//       savingsAccount.balance -= amount;
//     }
//   },
//   summary: function printAccountSummary() {
//     return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."
//   }
// };

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
      if (amount > 0) {
          savingsAccount.balance += amount;
      }
  },
  withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      }
  },
  // your code goes here
  printAccountSummary: function() {
      return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."
  }
};

console.log(savingsAccount.printAccountSummary());


//create an object called facebookProfile with 3 properties: name, friends, messages and 4 methods: postMessage(message), deleteMessage(index), addFriend(), removeFriend()

var facebookProfile = {
  name: "Jenny",
  friends: 39, 
  messages: ["hello!", "how are you!?", "BUTTS!", "LOLOLOL"],

  postMessage: function postMessage(message) {
    let newMessage = facebookProfile.messages.push(message);
    return newMessage;
  },
    
  deleteMessage: function deleteMessage(index) {
    let deleteMe = facebookProfile.messages.splice(index, 1);
    return deleteMe;
  },
  
  addFriend: function addFriend() {
    facebookProfile.friends += 1;
    return facebookProfile.friends;
  },
    
removeFriend: function removeFriend() {
  facebookProfile.friends -= 1;
  return facebookProfile.friends;
  }
}

facebookProfile.postMessage("did it work!?")
facebookProfile.postMessage("It's working, YAY!!!!")
console.log(facebookProfile.messages)


facebookProfile.deleteMessage(3);
console.log(facebookProfile.messages)

facebookProfile.addFriend();
console.log(facebookProfile.friends)

facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
console.log(facebookProfile.friends)

//use forEach() method to loop array and print out (console log) the following summaries: 
// Jelly donuts cost $1.22 each
// Chocolate donuts cost $2.45 each
// Cider donuts cost $1.59 each
// Boston Cream donuts cost $5.99 each

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

// console.log(donuts[1].type)

donuts.forEach(donut => console.log(donut.type + " donuts cost $" + donut.cost + " each"))

// donuts.forEach(element => console.log(element));

// console.log(donuts["type"] + " donuts cost $" + donuts["cost"] + " each")