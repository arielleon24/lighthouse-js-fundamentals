const conditionalSum = function(values, condition) {
  let result = 0
  let worth = ""
  for (let value of values) {
    if (value % 2 === 0 && value >= 1) {
      worth = "even"

      if (worth === condition) {
        result += value
      } 

    } else if (value % 2 === 1) { 
      worth = "odd"
      if (worth === condition) {
        result += value
      } 
    } else {
      return 0 
    }
  } return result 
}
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));