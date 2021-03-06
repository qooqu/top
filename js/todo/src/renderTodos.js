import state from "./index";
import clearList from "./clearList";
import liTodo from "./liTodo";

const renderTodos = () => {
    // need a global variable for sort type
    // map the todos array to get a new array of keys based on sort type
    // sort the new array
    // map the new array to get a newly ordered todoList

    let todosSorted = Object.keys(state.currentProject.todos)
        .sort()
        .map((key) => state.currentProject.todos[key]);

    clearList(state.todoList);
    todosSorted.forEach((todo) => {
        state.todoList.appendChild(liTodo(todo, "details", "edit", "remove"));
    });
};

export default renderTodos;
