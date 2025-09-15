import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";


import ToDo from "./ToDo";
function ToDoItems() {
    const contextObj = useContext(TodoItemsContext);
    const toDoItems = contextObj.toDoItems;
    return (
    <div className="todo-box">
        {toDoItems.map((item) => (
            <ToDo key={item.name} toDoName={item.name} toDoDate={item.date}></ToDo>
        ))}
    </div>
    );
}
export default ToDoItems;