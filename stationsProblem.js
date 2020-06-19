const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];



const chooseStations = function (stations) {
  let goodStations = [];
  
  for (let i = 0; i < stations.length; i++) {
    let locations = stations[i];
    const [name, capacity, locType] = locations;
    // let name = locations[0];
    // let capacity = locations[1];
    // let locType = locations[2];

    
    if (capacity >= 20 && (locType === "school" || locType === "community centre")) {
        goodStations.push(name)
    }
  }
  return goodStations;
}

console.log(chooseStations(stations))





//function will receive an array of stations
//each station will also be an array  with a name, capcity, venue type 
//appropriate station -> capacity of >= 20, a school OR comminity center

// const stations = [
//     ['Big Bear Donair', 10, 'restaurant'],
//     ['Bright Lights Elementary', 50, 'school'],
//     ['Moose Mountain Community Centre', 45, 'community centre']
//   ];
  

// const chooseStations = (stations) => {
//     // let name = stations[0];
//     // let capacity = stations[1];
//     // let locationType = stations [2];
//     let goodStations = [];

//     for (let i = 0; i < stations.length; i++) {

//         if (stations[1] >= 20 && stations[2] === "school" || stations[2] === "community centre") {
//            stations[0].push(goodStations);
//         }
//     }
//     return goodStations;
// }

// console.log(chooseStations(stations))

