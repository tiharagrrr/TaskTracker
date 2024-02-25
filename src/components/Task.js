import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''} `} 
    onDoubleClick={() => onToggle(task.id) } >
        <h3 >{task.text} 
        <div className='taskdiv'style={{color:'#2c2f33', cursor:'pointer', }} >
        <FaTimes onClick={() => onDelete(task.id)}/> 
        </div>
        </h3>
        <p>{task.day}</p>

    </div>
  
  )
}

export default Task