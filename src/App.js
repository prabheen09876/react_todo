"use client"
import React, { useState } from 'react'
import "./App.css"
const App = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const deleteHandler= (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)

  }
  const submitHandler = (e)=>{
e.preventDefault()
setmainTask([...mainTask, {title, desc}])

settitle("")
setdesc("")
console.log(mainTask);

  }

  let renderTask = <h2>No task here</h2>
  if (mainTask.length>0) {
    renderTask= mainTask.map((t,i)=>{
      return (<li className='lis'> 
        <div className='ok'>
        <h3>
         {t.title}
        </h3>
        <h5>
          {t.desc}
        </h5>
      </div>
      <button onClick={()=>{
        deleteHandler(i)
      }}>Delite</button>
      </li>
      )
        })
  }

  return (
    <>
    <h1>
     It's my ToDo list
    </h1>
    <form onSubmit={submitHandler}>
        <input type='text'className='text' placeholder='Enter Task Here' value={title} onChange={(e)=>{
settitle(e.target.value)
        }}></input>
        <input type='text'className='text' placeholder='Enter Description'value={desc} onChange={(e)=>{
setdesc(e.target.value)
        }}  ></input>
        <button className='btn'>
 Add Task
        </button>
    </form>
    <hr/>
    <div>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default App