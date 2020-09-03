const judgeVegetable = function (vegetables, metric) {
  var mostRedness = [];
  for (i = 0; i < vegetables.length; i++ ) {
    console.log(vegetables[i].redness)
    mostRedness.push(vegetables[i].redness)
  } 
  
  console.log(mostRedness);
  var topScore = Math.max(...mostRedness);
  console.log(topScore);
  if (topScore === vegetables[0].redness) {
    console.log(vegetables[0].submitter)
    return vegetables[0].submitter
  } else if (topScore === vegetables[1].redness) {
    console.log(vegetables[1].submitter)
    return vegetables[1].submitter
  } else if (topScore === vegetables[2].redness) {
    console.log(vegetables[2].submitter)
    return vegetables[2].submitter
  } //CODE WORKS!!!!!
} 

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = vegetables.redness

judgeVegetable(vegetables, metric)