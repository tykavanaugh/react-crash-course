import React from 'react'
import { useState } from 'react'


const AddTask = ({addTask}) => {
  const [ text,setText] = useState("")
  const [ day,setDay] = useState("")
  const [ reminder,setReminder] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!text)
    {alert('Please add task')
      return
    }
    addTask({text,day,reminder})
    setText("")
    setDay("")
    setReminder(false)
  };

  return (
    <div>
      <form className="add-form" onSubmit={(event) => handleSubmit(event)}>
        <div className="form-control">
          <label htmlFor="">Task</label>
          <input type="text" placeholder="Add task" value={text} onChange={(event) => setText(event.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="">Day and time</label>
          <input type="text" placeholder="Add date and time" value={day} onChange={(event) => setDay(event.target.value)}/>
        </div>
        <div className="form-control form-control-check">
          <label htmlFor="">Set reminder</label>
          <input type="checkbox" value={reminder} checked={reminder} onChange={(event) => setReminder(event.currentTarget.checked)}/>
        </div>
        <input type="submit" value="Save" className="btn btn-block"/>
      </form>
    </div>
  )
}

export default AddTask
