function howManyHundreds (bottles){
  /*
  Takes number of bottles EX 894 divide it by 100 to determine how many times it fills cases of 100  - 
  (894 / 100 = 8.94 Cases)
  Then we use the Modulo Operator to calculate what remains (894 % 100 which leaves a remaining of 94) 
  Then we divide that by 100 to come to the result of 0.94 and we substract the amount from the previous equation to come up with a complete number) */

  let hundredsCount = 0 
  return hundredsCount = (bottles / 100) - ((bottles % 100) / 100);
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);