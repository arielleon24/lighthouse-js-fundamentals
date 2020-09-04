const numberOfVowels = function(data) {
  let result = 0
  for (i = 0; i < data.length; i++){
    if (data[i] === "o") {
      result += 1
    } else if (data.charAt(i) === "a") {
      result += 1
    } else if (data.charAt(i) === "i") {
      result += 1
    } else if (data.charAt(i) === "u") {
      result += 1
    } else if (data.charAt(i) === "e") {
      result += 1
    }
  } 
   return result
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));