//create a function to determine someone's age ageCalculator
//takes in name, yearOfBirth, currentYear
//returns a statement: "Name is x years old."

let name = ''
let currentYear = 2020
let yearOfBirth = 2010

const ageCalculator = (name, yearOfBirth, currentYear) => {

  let age = currentYear - yearOfBirth

  return `${name} is ${age} years old.`;
}

console.log(ageCalculator('Jennifer', 1990, 2020));