// TASK
import React from 'react'
import useTask from '../customHooks/useTask'


function TaskItem({task, onComplete, onDeleteItem, onEditItem}) {
  
  const ttask = () => {
    const [task, onEditItem, onDeleteItem] = useTask(null)
  }

    
  const getStyle = () =>{
    return{
      textDecoration: task.completed ? 'line-through' : 'none'
    }
  }
  
  return (
    <div style={getStyle()}>
      <input type="radio" checked={task.completed}
      onChange={()=> onComplete(task.id)}/>
      {task.task}
      <button className='add-btn-delete' onClick={()=>onDeleteItem(task.id)}><i class="fa fa-trash-o" aria-hidden="true"></i></button>
      <button 
      className='add-btn-edit'onClick={()=>onEditItem (task.id )}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
    </div>
  )
}


export default TaskItem;

