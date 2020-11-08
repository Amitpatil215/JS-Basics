let syHello = function (name) {
    console.log(`Hello ${name} !`);
}

//syHello("amit")


let fulNameMaker = function (firstname, lastname) {
    console.log(`Happy to have you, ${firstname} ${lastname}`)
}

//fulNameMaker("Amit", "Patil");

let addNum = function (num1, num2) {
    let added = num1 + num2;
    return added;
}

//let result = addNum(1, 2)
//onsole.log(result);

let multiplyerNum = function (num1, num2) {
    return num1 * num2
}

/// Using defualt parameters
let guestUser = function (name = 'yourName', courseCount = 0) {
    return "Hello " + name + " and your course count is " + courseCount;
}

console.log(guestUser());