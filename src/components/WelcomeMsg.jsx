import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
function WelcomeMsg(){
    const {toDoItems} = useContext(TodoItemsContext);
    return (

        toDoItems.length === 0 && <h3 className="wlcm-msg">No Task Added...</h3>
    );
}
export default WelcomeMsg;