import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-content">
        <AppName></AppName>
        <AddToDo></AddToDo>
        <WelcomeMsg></WelcomeMsg>
        <ToDoItems></ToDoItems>
      </center>
    </TodoItemsContextProvider>
  );
}
export default App;
