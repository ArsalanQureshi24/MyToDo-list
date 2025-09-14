import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TodoItemsContext } from "../store/todo-items-store";

function ToDo({toDoName,toDoDate}){

  const {deleteItem} = useContext(TodoItemsContext)

    return <div className="container">
        <div className="row my-row">
        <div className="col-4">
        {toDoName}
        </div>
        <div className="col-4">
        {toDoDate}
        </div>
        <div className="col-2">
        <button type="button" className="btn btn-danger my-btn" onClick={() => deleteItem(toDoName)}>Delete
</button>
        </div>
    </div>
  </div>
}
export default ToDo;