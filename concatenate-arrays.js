//on a scale of 1-10, how much do people like lighthouses
//researchers stored numbers in an array for each location
//we have 2 arrays of data for every location 
//we want one array for each location
//concatenate the arrays together to form single array

// array1 = [2, 4, 6, 3];
// array2 = [6, 7, 3, 7, 4, 3, 3];
// let newArray = array1.concat(array2);
// console.log(newArray)


const concat = (arrayOne, arrayTwo) => {
  let concatArray = arrayOne.concat(arrayTwo);
  return concatArray;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

concat([4, 5, 3], [8, 4]);




// For example:

// code	output
// concat([ 1, 2, 3 ], [ 4, 5, 6 ]);	[ 1, 2, 3, 4, 5, 6 ]
// concat([ 0, 3, 1 ], [ 9, 7, 2 ]);	[ 0, 3, 1, 9, 7, 2 ]
// concat([], [ 9, 7, 2 ]);	[ 9, 7, 2 ]
// concat([ 5, 10 ], []);	[ 5, 10 ]

// console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
// console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
// console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
// console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);