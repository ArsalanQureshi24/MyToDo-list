import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext([]);

const todoItemsReducer = (currTodoItems, action) => {
  let newToDoItems = currTodoItems;
  if( action.type === 'ADD_ITEM') {
    newToDoItems = [
      ...currTodoItems,
      { name: action.payload.newToDoItem, date: action.payload.newToDoDate },
    ];
  }

  else if (action.type === 'DELETE_ITEM') {
    newToDoItems = currTodoItems.filter((item) => {
      return item.name !== action.payload.todoItemName;
    });
  }

  return newToDoItems;
}

const TodoItemsContextProvider = ({children}) => {
    const [toDoItems, dispatchToDoItems] = useReducer(todoItemsReducer,[]);
  
    function addNewItem(todoItem, todoDate){
      if(todoItem === "" || todoDate === "") {
        alert("Please enter both To-Do and Date.");
        return;
      }

      const newItemAction = {
        type: 'ADD_ITEM',
        payload: {
          newToDoItem: todoItem,
          newToDoDate: todoDate,
        },
      };
      dispatchToDoItems(newItemAction);
    };

  function addItemOnKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      addNewItem(event);
    }
  }

  function deleteItem(todoItemName) {
    alert("Deleting " + todoItemName);
    const deleteItemAction = {
      type: 'DELETE_ITEM',
      payload: {
        todoItemName,
      },
    };
    dispatchToDoItems(deleteItemAction);
  }

  return (
    <TodoItemsContext.Provider value={
        {
            toDoItems, 
            addNewItem, 
            deleteItem, 
            addItemOnKeyDown,
        }}
    >{children}
    </TodoItemsContext.Provider>
  );
}


export default TodoItemsContextProvider;