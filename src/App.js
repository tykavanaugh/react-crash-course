import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';
import { useState,useEffect } from 'react'



function App() {
  const [tasks,setTasks] = useState([]);
  const [showAddTask,setShowAddTask] = useState(false);

  useEffect(()=>{
    const getTasks = async () =>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[])

  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await response.json()
    return data
  }


  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks')
    const data = await response.json()
    return data
  }

  
  const title = "Task Tracker Thing"


  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{ method:"DELETE" })
    setTasks(tasks.filter((task) => task.id !== id))
  };

  const toggleReminder = async (id) => {
    const currentTask = await fetchTask(id)
    const updatedTask = {...currentTask,
      'reminder':!currentTask.reminder
    }
    const response = await fetch(
      `http://localhost:5000/tasks/${id}`,{ 
        method:"PUT" ,
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(updatedTask)
      }
    )
    const data = await response.json()
    setTasks(tasks.map((task) => task.id === id ? {...task,reminder:data.reminder}:task))

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  };

  const addTask = async (task) => {
    const response = await fetch(`http://localhost:5000/tasks/`,{ 
      method:"POST",
      headers: {
        'Content-type':'application/json'
      }, 
      body: JSON.stringify(task)
    })
    const data = await response.json()
    setTasks([...tasks,data]);

  };

  return (
    <div className="container">
      <Header title={title} showAddTask={showAddTask} onAdd={()=>setShowAddTask(!showAddTask)}/>
      {showAddTask?<AddTask addTask = {addTask}/>:""}
      {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/> : <h3>No tasks left</h3>}
    </div>
  );
}

export default App;
