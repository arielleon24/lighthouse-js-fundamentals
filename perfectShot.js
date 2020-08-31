const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] // the moves taken during the activity


function finalPosition (moves) {
  // Initial values for position held in variables X and Y [0,0] 
  // Values declared within function as they are only needed here
  let x = 0 
  let y = 0
  //Loop to go through each element of array and check them agains the if statement bellow 
  //Variable I determines the position of the beginning of the loop and the index number it is reviewing
  for (i = 0; i <= moves.length; i++) { 
      // if statement that checks the value of each array against the directions and add numerial value to each.
      if (moves[i] === 'north') {
        y += 1 
      } else if (moves[i] === 'south') {
        y -= 1
      } else if (moves[i] === 'west') {
        x -= 1
      } else if (moves[i] === 'east') {
        x += 1
      }
  }
  let result = [x, y]
      return result
 
}
 

console.log(finalPosition(moves));
