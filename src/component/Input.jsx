import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodos} from'../trk/todosSlice';

function Input() {
  const dispatch = useDispatch()
  const todoslength = useSelector((state)=>state.todosSlice.todos.length)
  
  const [title,setTitle] = useState('')
  const[details,setDetiles]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
     
    const todo = {id:todoslength+1,title,details,complete:false}
     dispatch(addTodos(todo))
     setDetiles("")
     setTitle("")

  }

  return (
    <div className='w-full flex justify-center items-center'>
      <form action="" className='space-x-2' onSubmit={handleSubmit}>
        <div className='flex flex-col  space-y-4'>
        <div className=''>
          <label className='text-xl font-semibold'>Title</label>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className='h-10 rounded-md px-2 ml-20'/>
        </div>
        <div className='space-x-3'>
          <label className='text-xl font-semibold'>Description</label>
          <input type="text" className='h-10 rounded-md px-2' onChange={(e)=>setDetiles(e.target.value)} value={details}/>
        </div>
      <button className=' p-2 px-3 rounded-lg bg-purple-700 text-white font-semibold' type='submit'>Add To Cart</button>
      </div>
      </form>
    </div>
  )
}

export default Input