import { useState } from 'react'
import data from './assets/data.json'
import './App.css'
import TaskList from "./assets/componentes/TaskLIST"
import Task from './assets/componentes/Task'
import Header from './assets/componentes/Header'

function App() {

  const [task, setTask] = useState(data);

  const onComplete =(id) => {

    setTask(task. map((task) =>{
      return task.id === Number(id) ? {...task, completed: !task.completed}: {...task};
    }))
  }

  if (task === ''){
    alert('debes colocar una tarea')
    return
  }

  const onDeleteItem = (id) => {
    setTask([...task].filter(task => task.id !== id))
  }

  const addTask = (newTask)=>{
    console.log('newTask', newTask)
    let newItem = {id : +new Date(), task: newTask, completed: false};
    
    setTask([...task, newItem])
  }



  return(
    <div className='container'>
      <h1>Todo App</h1>
      <Header addTask={addTask}/>
      <TaskList task = {task} onComplete = {onComplete} onDeleteItem = {onDeleteItem} />

      <div className='container-final'>
        <p>You have 2 pending tasks
        <button className='button-clear'> Clear all</button>
        </p>
        
      </div>
    </div>

  )

}

export default App
