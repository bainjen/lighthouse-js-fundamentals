//Define a function called merge
//The function should, when given two sorted arrays containing numbers, returns a sorted array of the numbers from both lists.

// For example:

// code	output
// merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]);	[ 1, 2, 3, 4, 4, 5, 6 ]
// merge([ 4 ], [ 2, 5, 8 ]);	[ 2, 4, 5, 8 ]
// merge([ 1, 2, 6 ], []);	[ 1, 2, 6 ]

const merge = (arrayOne, arrayTwo) => {
  const combinedArray = arrayOne.concat(arrayTwo); 
  console.log(combinedArray);
  
  return combinedArray.sort();
}

merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]);	
merge([ 4 ], [ 2, 5, 8 ]);
merge([ 1, 2, 6 ], []);	