/// == equality     // is value is equal
/// === Identity   // is value object is equal

/// For datatypes
// let myVar = ''
// let secVar = ''

// console.log(myVar == secVar) //true
// console.log(myVar === secVar) //true

///For Objects

// let myVar = []
// let secVar = [] //this is another object from myVar

// console.log(myVar == secVar) //false
// console.log(myVar === secVar) //false

let myVar = []
let secVar = myVar

console.log(myVar == secVar) //true
console.log(myVar === secVar) //true