
import { useState, useContext, useRef } from 'react';
import { TodoItemsContext } from '../store/todo-items-store';

function AddToDo() {
  const [todoItem, setTodoItem] = useState('');
  const [todoDate, setTodoDate] = useState('');
  const { addNewItem } = useContext(TodoItemsContext);
  const dateInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewItem(todoItem, todoDate);
    setTodoItem('');
    setTodoDate('');
  };

  const handleDateClick = () => {
    dateInputRef.current.showPicker();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input 
          type="text" 
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
          placeholder="Enter todo here"
          
        />
      </div>
      <div>
        <input 
          type="date" 
          value={todoDate}
          ref={dateInputRef}
          onChange={(e) => setTodoDate(e.target.value)}
          onClick={handleDateClick}
          placeholder='Select Date'
          style={{ color: todoDate ? 'inherit' : '#999' }}
        />
      </div>
      <button type="submit" className='add-btn'>Add</button>
    </form>
  );
}

export default AddToDo;