import {useState} from 'react'

const  useTask=() =>{
    const [Task, setTask] = useState()

    const ttask = (onEditItem) =>{

        newTask.id =Date.now()
        setTask({
            ...Task,
            onEditItem
        })
    }

    const onDeleteItem = (TaskID) =>{
        setTask(Task.filter(Task => Task.id !== TaskID))
    }

    return [
    ttask,
    onEditItem,
    onDeleteItem,
  ]
    
}

export default useTask