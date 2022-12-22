import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { studentdata } from '../ContextApi/StudentContext'
export default function Editpage() {
    let nav=useNavigate()
    const location=useLocation()
    const {ECE}=location.state;
    const id=ECE.item.id
    const [name,setName]=useState(ECE.item.name)
    const [age,setAge]=useState(ECE.item.age)
    const [course,setCourse]=useState(ECE.item.course)
    const [batch,setBatch]=useState(ECE.item.batch)
    const {Update}=useContext(studentdata)
    const Editstudent={id,name,age,course,batch}

    function handleClick(e){
         e.preventDefault();
         Update(id,Editstudent)
         nav("/Student")
        }
    function handleRemove(){
        nav("/Student")
      }
  return (
    <>
     <form className=' data'>
      <input type='text'  name='name' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type='text' name='age' placeholder='Age' value={age} onChange={(e)=>setAge(e.target.value)}/><br/>
     </form>
     <form className='data1'>
      <input type='text' name='batch' placeholder='Batch' value={batch} onChange={(e)=>setBatch(e.target.value)}/>
      <input type='text' name='course' placeholder='Course' value={course} onChange={(e)=>setCourse(e.target.value)}/><br/>
     </form>
     <div className='buttons'>
      <button className='cancel btn btn-dark' onClick={handleRemove}>Cancel</button>
      <button className='submit btn btn-primary' onClick={handleClick}>Submit</button>
     </div>
    </>
  )
}
