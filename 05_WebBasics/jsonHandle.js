const student = {
    name: 'John',
    age: '23',
    isActive: true
}

//Convert the object into a string to be stored in local storage
const studentObjTOString = JSON.stringify(student)
console.log(typeof studentObjTOString);

///Storing in local storage
//localStorage.setItem('studnet', studentObjTOString)

// fetching from storage
var retrivedStringStudent = localStorage.getItem('studnet')

const studentStringToJson = JSON.parse(retrivedStringStudent);
console.log(typeof studentStringToJson);

console.log(studentStringToJson.age);
console.log(studentStringToJson.name);
console.log(studentStringToJson.isActive);