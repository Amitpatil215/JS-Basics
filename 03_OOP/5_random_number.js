let numOne = 22
let numTwo = 7
result = numOne / numTwo

// Restrict decimal upto two digits
let floatResult = result.toFixed(2)
console.log(floatResult);

// Rounding up float value
console.log(Math.floor(floatResult));

/// Randome
// return a randome value in between 1 and 0
console.log("Rndom number");
console.log(Math.random());

/// Dice roller
let upper = 6
let lower = 1
let myRandom = Math.floor(Math.random() * (upper - lower + 1))
console.log(`Dice rolled ${myRandom}`);