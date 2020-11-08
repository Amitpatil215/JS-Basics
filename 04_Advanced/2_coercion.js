// Technique in which javascript interpret itself

console.log('5' + 5); //Prints 55
console.log('5' - 5); //Prints 0

const giveType = typeof 5 //Runtime type
console.log(giveType);

const adder = true + 5 // true treated as 1 nd false as 0
console.log(adder);

const sub = false + 5
console.log(sub);



const loginDetails = []
//login for getting details from DB

const loginID = loginDetails[0]

if (loginID !== undefined) {
    console.log("Allow Use");
} else {
    console.log("Auth Failed");
}

///Values that interpret as false
// false
// 0
// ''  //empty string
// null
// undefined

///All other things are true