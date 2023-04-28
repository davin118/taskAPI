import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';



export default function TaskCard({ tasks }) {
   const navigate =useNavigate()
  return (
   <div 
   className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
   onClick={()=>{
    navigate(`/task/${tasks.id}`)
  }}>
    <h1 className=' font-bold uppercase'>{tasks.tittle}</h1>
    <p className='text-slate-400'>{tasks.description}</p>
   </div>
  )
}


