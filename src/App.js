import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'



function App() {
  const [tasks,setTasks] = useState([{
    "id": 1,
    "text": "Doctors Appointment",
    "day": "Feb 5th at 2:30pm",
    "reminder": true
  },
  {
    "id": 2,
    "text": "Meeting at School",
    "day": "Feb 6th at 1:30pm",
    "reminder": true
  }])
  const title = "Task Tracker Thing"


  const deleteTask = (id) => {
    console.log("on delete path",id)
    setTasks(tasks.filter((task) => task.id !== id))
  };

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
    console.log(id)
  };

  return (
    <div className="container">
      <Header title={title}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/> : <h3>No tasks left</h3>}
    </div>
  );
}

export default App;
