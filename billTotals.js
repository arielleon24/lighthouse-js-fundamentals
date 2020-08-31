var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];


//use the .map() funtion to iterate over every number 
let totals = bills.map(function(amount) {
  amount = amount + (amount * 0.15)
  amount = amount.toFixed(2) 
  return amount
}); 

console.log(totals); 