function ageCalculator (name, yearOfBirth, currentYear) {
  //stores the final value that we want to return
  let sentence = name + " is " + (currentYear - yearOfBirth) + " years old."
  //Returns value stored
  return sentence
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));


//Correct!!!