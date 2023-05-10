import React from 'react'
import {AiOutlineDelete} from'react-icons/ai';
import{GrCompliance}from'react-icons/gr';
import { useDispatch } from 'react-redux';
import { deleteTodos, todoToggle } from '../trk/todosSlice';
import { Link, useLocation, useNavigate } from "react-router-dom";

 
 
export default function List({todo}) {
  const navigate = useNavigate()
 const dispatch = useDispatch()
  const{id,title,details,complete}=todo
  const handleDlete =(id)=>{

    dispatch(deleteTodos(id))
  }
    
  const handleUpdate=()=>{

    navigate('/update',{replace:true});
  }

  return (
    <>
   

        {/* data */}
        <tbody className=' '>
          <tr className='bg-white  overflow-y-auto'>
            <td className={`p-3 text-sm text-gray-700`}><a href="">{id}</a></td>
            <td className='p-3 text-sm text-gray-700'>{title}</td>
            <td className='p-3 text-sm text-gray-700'> {details}</td>
            <td className='p-3 text-sm text-gray-700 space-x-4'>
              <Link to='/update' state={{id,title,details}}>
              <button className={`p-1 text-xl  rounded-full text-purple-700 bg-white ${complete&&"bg-purple-600"}`} onClick={()=>handleUpdate(id)}  ><GrCompliance /></button>
              </Link>
             
              <button className='p-1 bg-purple-600 text-xl text-white rounded-full hover:bg-white hover:text-purple-700' onClick={()=>handleDlete(id)}><AiOutlineDelete /></button>
            </td>
          </tr>
         
        </tbody>
        {/* <Total /> */}
        
        </>
  )
}
