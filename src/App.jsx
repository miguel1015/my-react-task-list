import { useState, useEffect } from 'react'
import data from './assets/data.json'
import './App.css'
import TaskList from "./assets/componentes/TaskList"
import Task from './assets/componentes/Task'
import Header from './assets/componentes/Header'
import { Flex, Heading } from "@chakra-ui/react"




function App() {
  const [task, setTask] = useState(data);
  const {description, setDescription} = task


  //completar Tarea---------------------------

  const onComplete =(id) => {
    setTask(task. map((task) =>{
      return task.id === Number(id) ? {...task, completed: !task.completed}: {...task};
    }))
  }

  //Eliminar Tarea-----------------------------

  const onDeleteItem = (id) => {
    setTask([...task].filter(task => task.id !== id))
  }

  //Agregar Tarea-------------------------------

  const addTask = (newTask , dess="DESCRIPCIONB POR DEFECTO")=>{
    console.log(' true', newTask)
    let newItem = {id : +new Date(), task: newTask, completed: false, description:  dess};
    
    setTask([...task, newItem])
  }

//Descripcion-------------------------------------
  const  addDescription = (descripcionTask)=>{
    console.log("true", descripcionTask)
    let newDescription = {id : +new Date(), description:descripcionTask, completed:false}
    setDescription([...description, newDescription])
  }



  //Editar Tarea--------------------------------

  const onEditItem = (id)=>{
    let newEditItem = task.find((element)=>{
      return element.id === id;
    });
    newEditItem = prompt("new task");
    let newTask = localStorage.getItem("task");
    if (newEditItem.value !==""){
      let resultado = JSON.parse(newTask);
      resultado.splice(newEditItem,{title : newEditItem, id : newEditItem});

      console.log(resultado)
      setTask(resultado);
      console.log(resultado,title)
    }
  }


  const descripcion = (id) => {
    console.log(id)
  }

  //Guardar en el local-------------------------

  useEffect(()=>{
    let data = localStorage.getItem('tasks')
    if (data){
      setTask(JSON.parse(data))
    } 
  },[])
  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(task)) 
  },[task])



  

  useEffect(()=>{
    let data = localStorage.getItem('descripcion')
    if (data){
      // setDescription(JSON.parse(data))
    } 
  },[])
  useEffect(()=>{
    localStorage.setItem('descripcion', JSON.stringify(description)) 
  },[description])





  return(
    <div>
    <div className='container'>
      <h1>Todo App</h1>
      <Header addTask={addTask} descriptionTask={addDescription}/>
      <TaskList task = {task} onComplete = {onComplete} onDeleteItem = {onDeleteItem} onEditItem = {onEditItem} description = {description}/>

      <div className='container-final'>
        <p>You have 2 pending tasks
        <button className='button-clear'> Clear all</button>
        </p>
      </div>
    </div>
    <Flex height="10vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" p={12} rounded={6}>
        <Heading mb={6}>
          comentary
        </Heading>
        <input type="text" placeholder='add your comentary'variant="filled" mb={3} />
        <button mb={6} colorSheme="teal">
          press
        </button>
      </Flex>
    </Flex>
    </div>
    

  )

}

export default App
