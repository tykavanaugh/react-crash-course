import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'



const Tasks = (props) => {
  
  return (
    <>
      {props.tasks.map((task) => (
      <Task task={task} key={task.id} deleteTask={props.deleteTask} toggleReminder={props.toggleReminder}/>
      ))}
    </>
  )
}

Tasks.propTypes = {

}

export default Tasks
