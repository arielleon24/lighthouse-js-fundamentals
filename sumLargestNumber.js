const sumLargestNumbers = function(data) {
  for (i = 0; i < data.length; i++) {
    data.sort(function(a, b){ 
    return b - a; 
  });
  

  } 

  const sumThem = data [0] + data [1];
  return sumThem
  console.log(sumThem);
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));