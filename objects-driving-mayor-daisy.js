//design to improve traffic flow
//installing street sensors to momitor how often cars pass by
//track car speeds
//function should create a new object with a property called speed and another called time
//new object should be added to cars array
//retriece current time by using Date.now()
//function returns an array the includes all elements in cars + new elements
//use push()

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const carPassing = function (cars, speed) {
  let newCar = {
    time: Date.now(),
    speed: speed
  };
  cars.push(newCar); 
  return cars; 
}

console.log(carPassing(cars, 87)); 
console.log(carPassing(cars, 34)); 
console.log(carPassing(cars, 7)); 
console.log(carPassing(cars, 47)); 

// EXAMPLE
// const cars = [
//   {
//     time: 1568329654807,
//     speed: 40,
//   },
//   {
//     time: 1568329821632,
//     speed: 42,
//   },
//   {
//     time: 1568331115463,
//     speed: 35
//   }
// ]

// const speed = 38

// carPassing(cars, speed)

// RETURNS

// [
//   {
//     time: 1568329654807,
//     speed: 40,
//   },
//   {
//     time: 1568329821632,
//     speed: 42,
//   },
//   {
//     time: 1568331115463,
//     speed: 35
//   },
//   {
//     time: 1568431216417,
//     speed: 38
//   }
// ]