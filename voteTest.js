const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

// start of attempt 
/*const chooseStations = function (stations) { 
  for (let station of stations) {
   
    if (station[1] >= 25 && (station[2] === "school" || station[2] === "community centre" )){
      console.log(station);
    } 
  }

  
}

console.log(chooseStations(stations));

const chooseStations = function (stations) { 
  for (i = 0; i <= stations.length; i++) {
    console.log(stations)
  }
}
console.log(chooseStations());
*/
// End of attempt 

function chooseStations (stations) {
  const goodStations = []
  for (const station of stations) {
    const capacity = station[1]
    if (capacity >= 20) {
      
      const type = station[2]
      
      if (type === "school" || type === "community centre") {
        goodStations.push(station[0])
      }
    }
  }
  return goodStations
}

console.log(chooseStations (stations));