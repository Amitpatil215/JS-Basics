const myTodos = ['Buy Bread', 'Go to gym', 'Record youtube videos']

const newTodos = [{
    title: "Buy Bread",
    isDone: false,
}, {
    title: 'Go to Gym',
    isDone: false,
}, {
    title: 'Record youtube videos',
    isDone: false,
}]

// Find index iterate through every element as soon as
// it reaches desired reult returns the index value
const index = newTodos.findIndex(function (todo, index) {
    console.log(todo);
    return todo.title === "Go to Gym";
})

console.log(index);

///creating function for above
const findTodoIndex = function (myTodos, title) {
    const index = myTodos.findIndex(function (eachTodo, index) {
        return eachTodo.title.toLowerCase() === title.toLowerCase();
    })
    return index;
}

console.log(`Found at index ${findTodoIndex(newTodos, 'Record youtube videos')}`);



///-----------///
const findTodoTitle = function (myTodo, title) {
    const titleReturned = myTodo.find(function (eachTodo, index) {
        return eachTodo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned;
}
let printOut = findTodoTitle(newTodos, 'Record youtube videos')
console.log(printOut);
