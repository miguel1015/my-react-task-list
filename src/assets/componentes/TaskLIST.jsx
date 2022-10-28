// TASKLIST


import React from 'react'
import Task from './Task';

function  TaskList({task, onComplete, onDeleteItem, onEditItem}) {
  return (

    <div className='TaskList'>
        {
             task.map((task, index)=> (
            <Task key={`todo-${index}`} task = {task} onComplete = {onComplete} onDeleteItem = {onDeleteItem} onEditItem = {onEditItem}/>
        ))
         }
    </div>
  )
}


export default TaskList;