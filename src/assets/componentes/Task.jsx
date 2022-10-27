// TASK
import React from 'react'

 function TaskItem({task, onComplete, onDeleteItem, onEditItem}) {
  
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
      <button className='add-btn-edit'onClick={()=>onEditItem(todo.id)}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
    </div>
  )
}


export default TaskItem;

