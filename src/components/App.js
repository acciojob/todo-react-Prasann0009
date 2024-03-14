
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    let found = false;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i] === inputValue) {
        alert("Task already added");
        found = true;
      }
    }
    if (!found) {
        setTasks([...tasks,inputValue]);
        
        setInputValue('');
    }
    
  };

  const removeTask = (taskRemove) => {
       const remainingTasks = tasks.filter(task => task !== taskRemove);
       setTasks(remainingTasks);
  }
  return (
    <div>
        <div className="todo_input">
        <span>To-Do List</span>
        <div>
          <input
            className="input_text"
            value={inputValue}
            placeholder="Enter Task"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addTask}>Add Todo</button>
        </div>
      </div>
      <div className="todo_list">
        <ul>
        {
            tasks.map(task=>{
                return(<li>
                    <span>{task}</span>
                    <button onClick={()=> removeTask(task)}>Delete</button>
                  </li>)
              
            })
        }
        </ul>
      </div>
    </div>
  )
}

export default App
