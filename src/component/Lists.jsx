import React from 'react'
import { useSelector } from 'react-redux'
import List from './List'
import Upadate from '../page/Upadate'

export default function Lists() {
  
  const books = useSelector((state)=>state.todosSlice.todos)
 
 
  
  return (
    <div className='border-t-2 border-cyan-800 '>
      <div className='flex justify-between p-3'>
      <h1 className='text-xl '>Table List</h1>
      <input type="text" placeholder='serche' className='pl-3'/>
      </div>
      <table className='w-full mb-7 '>
        <thead className='bg-gray-50 border-b-2 border-gray-200  '>
          <tr className=''>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>No.</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Title</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Details</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Action</th>
            
          </tr>
          </thead>
          {
            books.map((todo)=>(<List todo={todo} key={todo.id}/>))
          }
         
      </table>
      
    </div>
  )
}
