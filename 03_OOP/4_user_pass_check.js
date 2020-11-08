let userEmail = '123Abcd'
let password = '1234@tt'

let userChecker = function (myString) {
    if (
        (myString.includes("123"))
        &&
        (myString.length > 6)) {
        return true;
    }
    return false;
}

let passChecker = function (pass) {
    if (
        (pass.includes('@'))
        &&
        (pass.length > 5)) {
        return true;
    }
    return false;
}

console.log(passChecker(password));
console.log(userChecker(userEmail));