// HEADER


import React from 'react'
import { useState } from 'react';

function Header({addTask}) {

    const[userImput, setUserImput] = useState('')

    const handleOnChange = (e) => {
        setUserImput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userImput.trim()!==''){
            addTask(userImput);
            setUserImput('');
        }
    }

  return (
    <div>
      <div className='placeholder'>
        <form onSubmit= {handleSubmit}>
            <input type="text" placeholder='add your new todo' value={userImput} onChange ={handleOnChange}/>
            <button className='cruz'>+</button>
        </form>
      </div>
    </div>
  )
}


export default Header;