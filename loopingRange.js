function range(start, end, step) {
  let steps = [start, end, step]
  steps = (end - start) / step  
  return steps
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));