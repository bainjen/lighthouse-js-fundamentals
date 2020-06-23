//judging system for best veg awards
//juddjing tomatoes based on their REDNESS || PLUMPNESS 
//function will receive two parameters: 
//1. a list of veggies(as an array of objects)
//2. characteristic to judge the veggies by(in the case of a tomato, either redness or plumpness).
//return the name of the person who submitted (vegetables.submitter) the veg with the highest ranking 

const judgeVegetable = function (vegetables, metric) {
  const metricArray = vegetables.map((veg, i) => veg[metric]);
  const maxVal = Math.max(...metricArray);
  const candidates = vegetables.filter(veg => veg[metric] === maxVal)
  if (candidates.length == 1) {
    return candidates[0].submitter;
  } else {
    return candidates.map(cand => cand['submitter']);
  }
}







// EXAMPLE
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 10,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
const metric = 'redness'


console.log(judgeVegetable(vegetables, metric))

  // let newArray = [];
  // for (let i = 0; i < vegetables.length; i++) {
  //   newArray.push(vegetables[i][metric]); 
  // }
  // return newArray; 

// for (let i = 0; i < vegetables.length; i++) {
//   console.log(vegetables[i]);
//   for (let j = 0; j < vegetables.length; j++) {
//     // console.log(vegetables[j])
//     console.log(vegetables[j].redness)
//   }
// }

//do I want to push values into new arrays for comparison? Is that necessary?
//forEach or for loop?


// vegetables.forEach((vegetable) => {
//   console.log(vegetables['redness'])
// })

// let redVal = vegetables[1]['redness']; 
// let plumpVal = vegetables[1]['plumpness'];

// console.log(redVal);
// console.log(plumpVal);

// console.log(Math.max(vegetables.redness))

// const metric = 'redness'

// judgeVegetable(vegetables, metric)

// RETURNS "Old Man Franklin"

// newArray.push(vegetables['redness'])
// console.log(newArray)

//2 var mac value and newVegetable[i] iterated thru objects + 2 if comaprisons 
// reduce() method and conditional 
