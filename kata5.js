const urlEncode = function(text) {
  let encodedUrl = " "
  for (let character of text) {
    if ( character === " ") 
    {
      encodedUrl += "20%" 
    }
    else 
    {
      encodedUrl += character
    }
  } return encodedUrl
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

/* this function loops over every character within the string and sends them back into the encodedURL variable. 
if the letter in the loop is missing, it replaces it with the string "%20"*/