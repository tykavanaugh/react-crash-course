import React from 'react'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

const Task = ({task,deleteTask,toggleReminder}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(task.id)}>
      <h3>{task.text}<FaTimes onClick={() => deleteTask(task.id)}/></h3><p>{task.day}</p>
    </div>
  )
}

Task.propTypes = {

}

export default Task
