//replacing trash cans with smart cans --> sorts items by waste, recycling, compost bins
//create a function smartGarbage(trash, bins) that increases the garbage count for waste, recycpling, or compost depending on what is added 
//trash argument will be a string of type
//bins argument is an object contaiing 3 properties (waste, recycling, compost) which each hold numerical val, 
//function increases correct value in bins object
//function returns newly updated object 


const smartGarbage = (trash, bins) => {

  if (trash === 'waste') {
    bins['waste']++;
  }

  else if (trash === 'recycling') {
    bins['recycling']++;

  } else if (trash === 'compost') {
    bins['compost']++;
  }
  
  return bins; 

}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 } ))


  // let bins = {}; 
  // let trash = bins['trash'];


//   if (trash === "waste" || trash === "recycling" || trash === "compost") {
//     bins.trash++
//     return bins;
//   }
// }

// EXAMPLE:

// console.log(smartGarbage('waste', { waste: 4, recycling: 2, compost: 5 }));
// {
//   waste: 4,
//   recycling: 3,
//   compost: 5
// }

//this function will take in types of garbage and if the garbage is equal to one of the bin keys, then we add one to the value of that key.
// if(trash === bin.element) {bin.element++}