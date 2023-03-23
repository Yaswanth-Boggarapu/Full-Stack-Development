import './App.css';
import  React, {useState} from "react";




function ToDoList() {
  const [todos, SetTodos] = useState([]);
  const [newTodo, setNewTodos] = useState('');
  const handleSbumit = (event)=>{
    event.preventDefault();
    if(newTodo.trim())
    {
      SetTodos([...todos, newTodo.trim()]);
      setNewTodos('');
    }
  };
  const handleDelete=(index)=>{
    const updatedTodos = todos.filter((todos,i)=>i!==index);
    SetTodos(updatedTodos);
  };

  return(
    <div>
      <form onSubmit={handleSbumit}>
        <input type = "text" value={newTodo} onChange={}></input>
      </form>
    </div>
  )
}

export default ToDoList;
