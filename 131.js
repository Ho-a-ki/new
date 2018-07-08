
var action = prompt("What would you like to do?");
var todo = [];

while (action !== 'quit') {
    if (action === 'new') {
        somethingTodo = prompt("You choose to add to do list : so what is your to do? :");
        todo.push(somethingTodo);
        console.log("TO DO ADD :" + somethingTodo);
    } else if (action === 'list') {
        console.log(todo);
        alert(todo);
    }
    var action = prompt("What would you like to do?");
}

console.log('finish this app.');