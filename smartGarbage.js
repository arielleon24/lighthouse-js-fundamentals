
const smartGarbage = function(trash, bins) {
  if (trash === 'waste') {
    bins.waste += 1
  } else if (trash === 'recycling') {
    bins.recycling += 1
  } else if (trash === "compost") {
    bins.compost += 1
  }
    return bins
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

/*first argument "trash" is passed on as a string through the console.log. 
Second argument is an object that does not need to be delcared outside of the console.log.
every time the string assigned to the trash argument is === to one of the values
in the object bins. The number value increases by one */