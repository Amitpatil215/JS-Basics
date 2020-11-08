// const sayHello = function (name) {
//     return "Hey there " + name
// }

const sayHello = (name) => "Hey there " + name

console.log(sayHello("Amit"));


const todo = [{ title: 'Buy bread', isDone: true },
{ title: 'Gym', isDone: true },
{ title: 'Drink', isDone: false },
{ title: 'Writing', isDone: false },
]

const thingsDone = todo.filter((eachTodo) =>
    eachTodo.isDone === true
)
const thingsNotDone = todo.filter((eachTodo) =>
    eachTodo.isDone === false
)

console.log("Things Done");
console.log(thingsDone);

console.log("Things Not Done");
console.log(thingsNotDone.forEach(function(each,index){console.log(each['title']);}));
