//function will recieve array of directions -- strings called north, south, west, east
//on a grid and one direction = one space move. [x, y] 
//parade begins at [0, 0]
//final position function should return the array [-1, 4]

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function(moves) {
  let startPoint = [0, 0]
  let endPoint = []

  
  // for (const move of moves) {
  for (let i = 0; i < moves.length; i++) {

    let change = moves[i];

    if (change === 'north') {
     startPoint[1] += 1
    }
    if (change === 'south') {
      startPoint[1] -= 1
    }
    if (change === 'east') {
      startPoint[0] += 1
    }
    if (change === 'west') {
      startPoint[0] -= 1
    }
  }
  endPoint = startPoint;
  return startPoint;
}

console.log(finalPosition(moves));


// 'north' += y;
// 'south' -= y;
// 'east' += x; 
// 'west' -= x; 

//could loop through the moves array and add or subtract from [0,0] accoring to each move
