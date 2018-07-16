
var action = prompt("What would you like to do?");
var todo = ["Redesign My Pants."];

while (action !== 'quit') {
    if (action === 'new') {
        toDoNew();
    } else if (action === 'list') {
        toDolist();
    } else if (action === 'delete') {
        toDoDelete();
    }
    var action = prompt("What would you like to do?");
}
console.log('BYE SEE YOU :)');


function toDoNew() {
    somethingTodo = prompt("Enter New ToDO");
    todo.push(somethingTodo);
    console.log(somethingTodo + " added to list");
}

function toDolist() {
    console.log("******************")
    // todo.forEach(function(i) {
    //     console.log(todo.indexOf(i) + ": " + i);
    // })
    todo.forEach(function (i, index) {
        console.log(index + ": " + i);
    })
    console.log("******************")
}

function toDoDelete() {
    deleteIndex = prompt("Enter the index you want to delete");
    todo.splice(deleteIndex, 1);
    console.log("Delete Complete.");
}