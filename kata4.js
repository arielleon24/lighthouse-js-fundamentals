const instructorWithLongestName = function(instructors) {
  let longest = 0
  let name = ""
  let longestNameInstructor = 
  for ( let instructor of instructors) {
    name = instructor.name
    if (name.length > longest) {
      longest = name.length 
      longestNameInstructor = instructor; 
    }  
  } console.log(longestNameInstructor)
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));