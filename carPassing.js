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

const speed = 38

function = carPassing(cars, speed) {
  cars.push({time: Date.now(), speed: speed }); 
  return cars; 
  console.log(cars)
}
/* function carPassing takes the cars array [] and pushes one object.
The new object added to the existing array includes {time: } and {Speed: } 
it sets the value of {time: } as the Date.now() method. 
it sets the value of speed as the const speed that had a value of 38 and was declared above. */