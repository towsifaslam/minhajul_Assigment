import React from 'react'
import{GrClearOption}from'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { todoClear } from '../trk/todosSlice';

export default function Total() {
  const todoslength = useSelector((state)=>state.todosSlice.todos.length)
  const remaingiTodos=(length)=>{
    switch(length){
      case 1:
        return <div className='text-green-500'>1 todo</div>
       case 0:
        return <div className='text-red-500'>No todos</div> 
        default:
          return <div className='text-yellow-500'>{length} todos</div>
        
    }
  }

  const dispatch = useDispatch()
  const handleClear=()=>{
     dispatch(todoClear())
  }
  return (
    <div className='mt-5 text-gray-400 text-center flex justify-around'>
      <div>{remaingiTodos(todoslength)}</div>
       <button onClick={handleClear} className='p-2 bg-purple-700 text-white px-5 rounded-lg' ><GrClearOption /></button>
    </div>
  )
}
