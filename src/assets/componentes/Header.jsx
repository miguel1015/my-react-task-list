// HEADER
import React from 'react'
import { useState } from 'react';

function Header({addTask, addDescription}) {

    const[userImput, setUserImput] = useState('')
    const [description, setDescription] = useState('')
    const[validation, setValidation] = useState({
      todo:undefined
    })


    const handleOnChange = (e) => {
        // setUserImput(e.currentTarget.value);
        const value = e.currentTarget.value
            setValidation({
              ...validation,
              todo: value.length === 0? "el nombre tenga menos de 3 caracteres" : ""
            })  
            setUserImput(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userImput.trim()!==''){
            addTask(userImput ,handleDescription);
            setUserImput('');      
          }
      }


    const handleDescription = (e)=>{
     let dess = prompt("add a description")
     return dess
     }




  return (
    <div>
      <div className='placeholder'>
        <form onSubmit= {handleSubmit}>
            <input type="text" placeholder='add your new todo' value={userImput} onChange ={handleOnChange}/>
            {/* <button className='cruz'>+</button> */}
            <button className='boton-description'  value={description}  onClick={handleDescription} ><i class="fa fa-sort-desc" aria-hidden="true"></i></button> 
            
            {validation.todo && <span style={{color: 'red' }}>{validation.todo}</span>}
        </form>
        
      </div>
    </div>
  )
}


export default Header;