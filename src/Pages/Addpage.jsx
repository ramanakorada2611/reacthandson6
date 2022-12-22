import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { studentdata } from '../ContextApi/StudentContext'

export const Addpage = () => {

  const {Addstudent}=useContext(studentdata)
  let nav=useNavigate()

  let [input,setInput]=useState({ name: "", age: "",batch: "", course: ""})
  // let [outputarr,setOutputarr]=useState([])
 
  function changeHandler(e){
  setInput({...input,[e.target.name]:e.target.value})
  }

  let {name,age,course,batch}=input;

  function handleClick(e){
  //  setOutputarr([...outputarr,{name,age,batch,course}])
  //  console.log('outputarr',outputarr)
   e.preventDefault();
   Addstudent(name,age,course,batch)
   console.log('input',input)
   nav("/Student")
  }
  function handleRemove(){
    nav("/Student")
  }
  

  return (
    <>
     <form className=' data'>
      <input type='text'  name='name' placeholder='Name' value={input.name} onChange={changeHandler}/>
      <input type='text' name='age' placeholder='Age' value={input.age} onChange={changeHandler}/><br/>
     </form>
     <form className='data1'>
      <input type='text' name='batch' placeholder='Batch' value={input.batch} onChange={changeHandler}/>
      <input type='text' name='course' placeholder='Course' value={input.course} onChange={changeHandler}/><br/>
     </form>
     <div className='buttons'>
      <button className='cancel btn btn-dark' onClick={handleRemove}>Cancel</button>
      <button className='submit btn btn-primary' onClick={handleClick}>Submit</button>
     </div>
    </>
  )
}
