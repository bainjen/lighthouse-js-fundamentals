//define 3 functions to calculate the area of 3 different shapes
//params are always numbers

//math for each shape:
//rectangle: length × width
//triangle: base × height / 2
//circle: π × radius2 --To access the value of π in your JavaScript code, use Math.PI.

// provided function names and params: 
// calculateRectangleArea(length, width)
// calculateTriangleArea(base, height)
// calculateCircleArea(radius)

let calculateRectangleArea = (length, width) => {
  let result = length * width;
  if (result > 0) {
    return result
  }
}

// console.log(calculateRectangleArea(4,7))

let calculateTriangleArea = (base, height) => {
  let result = (base * height) / 2;
   if (result > 0) {
    return result
  }
}

// console.log(calculateTriangleArea(5, 4));

let calculateCircleArea = radius => {

  let result = Math.PI * radius * radius;
  if (radius > 0) {
    return result
  }
}

// console.log(calculateCircleArea(10));

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined