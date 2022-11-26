// TASK
import React from 'react'
import useTask from '../customHooks/useTask'
import { useState } from 'react';



function TaskItem({task, onComplete, onDeleteItem, onEditItem}) {
  const [description , setDescription] = useState(false)
  const ttask = () => {
    const [task, onEditItem, onDeleteItem, description] = useTask(null)
}
  const handleDescription = (e) => {
    alert ("this a description")
  }
  

  const getStyle = () =>{
    return{
      textDecoration: task.completed ? 'line-through' : 'none'
    }
  }
  
  return (
    <div style={getStyle()}>
      <input type="radio" checked={task.completed}
      onChange={()=> onComplete(task.id)} dess={task.id} />
      {task.task}
      <button value={description} className='description' onClick={handleDescription}>
      <i class="fa fa-sort-desc" aria-hidden="true"></i>
      
      </button>
      <button className='add-btn-delete' onClick={()=>onDeleteItem(task.id)}>
        <i class="fa fa-trash-o" aria-hidden="true"></i>
      </button>
      <button className='add-btn-edit'onClick={()=>onEditItem (task.id )}>
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
      </button>
    </div>
  )
}


export default TaskItem;