const conditionalSum = function(values, condition) {
  let evenArray = []
  let oddArray = []
  let worth = ""
  for (let value of values) {
    if (value % 2 === 0 && value >= 1) {
      worth = "even"
      if (worth === condition) {
        evenArray.push(value)
      }
      console.log(evenArray) 
      
    } else if (value % 2 === 1) { 
      worth = "odd"
      if (worth === condition) {
        oddArray.push(value)
      } 
    } else {
      return 0 
    }
  }
};

console.log(evenArray)
console.log(oddArray)

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
//console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
//console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
//console.log(conditionalSum([], "odd"));