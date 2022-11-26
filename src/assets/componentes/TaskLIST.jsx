// TASKLIST
import React from 'react'
import Task from './Task';

function  TaskList({task, onComplete, onDeleteItem, onEditItem, description}) {
  return (

    <div className='TaskList'>
        {
             task.map((task, index, description)=> (
            <Task key={`todo-${index}`} task = {task} onComplete = {onComplete} onDeleteItem = {onDeleteItem} onEditItem = {onEditItem} description = {description}/>
        ))
         }
    </div>
  )
}


export default TaskList;