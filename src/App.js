
import './App.css';
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const[newTask,setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () =>{
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      complete: false,
    }
    setTodoList([...todoList, task]);
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task)=> {
        if(task.id ===id) {
          return {...task, complete:true};
        } else {
          return task;
        }
        
      })
    );
  };


  return (
    
    <div className="App">
      <div className="addTask">
        <input class="input" onChange={handleChange}/>
        <button class="button1" onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task)=>{
          return (
          <div>
            <h2 class="task" style={{
  textDecoration: task.complete ? 'line-through' : 'none'}}>{task.taskName}</h2>
            <button class="button2" onClick = {() => deleteTask(task.id)}> x </button>
            <button class="button2" onClick = {() => completeTask(task.id,task.complete)}> ✔ </button>
          </div>
          );
        })}
      </div>
    </div>
  );
}



export default App;
