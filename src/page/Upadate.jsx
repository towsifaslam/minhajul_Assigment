import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { todoUptade } from '../trk/todosSlice'
 

function Upadate() {
  
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  const [id,setId] = useState(location.state.id)
  const [title,setTitle] = useState(location.state.title)
  const [details,setDetails] = useState(location.state.details)

 
 
  const handleSubmit =(e)=>{
   
    e.preventDefault()
    dispatch(todoUptade({id,title,details}))
    
     
 
  }
  const HomePage=()=>{

    navigate('/update',{replace:true});
  }

  
  return (
    
    <div className='bg-gray-40 mt-10 w-1/2 mx-auto flex justify-center items-center'>
    <form action="" className='space-x-2' onClick={handleSubmit} >
      <div className='flex flex-col  space-y-4'>
      <div className=''>
        <label className='text-xl font-semibold' >Title</label>
        <input type="text"  className='h-10 rounded-md px-2 ml-20' value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div className='space-x-3'>
        <label className='text-xl font-semibold'>Description</label>
        <input type="text" className='h-10 rounded-md px-2' value={details}   onChange={(e)=>setDetails(e.target.value)}/>
      </div>
      <Link to='/' onClick={HomePage}>
    <button type='submit' className=' p-2 px-3 rounded-lg bg-purple-700 text-white font-semibold'  >update To Cart</button>
    </Link>
    </div>
    </form>
  </div>
  )
}

export default Upadate