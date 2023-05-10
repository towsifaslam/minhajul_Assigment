import React from 'react'
import Input from '../component/Input'
import Lists from '../component/Lists'
import Total from '../component/Total'
 

export default function Todos() {
  return (
    <div>
       <div className='max-w-7xl mx-auto h-screen bg-gray-400 flex justify-center items-center'>
        <div className='border bg-slate-200 p-5 space-y-4 shadow-2xl rounded-lg relative'>
         <Input />
        <Lists />
        <Total />
       
        </div>
        
    </div>
     
    </div>
  )
}
