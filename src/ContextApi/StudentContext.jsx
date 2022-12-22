import React, { useState } from 'react'
import { createContext } from 'react'

export let studentdata=createContext()
export default function StudentContext(props) {
   let [data,setData]=useState([{
    id:0,
    name:'ramana',
    age:'22',
    course:'b.tech',
    batch:'Ece'
   },
   {
    id:1,
    name:'ramana',
    age:'22',
    course:'b.tech',
    batch:'Ece'
   },
   {
    id:2,
    name:'ramana',
    age:'22',
    course:'b.tech',
    batch:'Ece'
   },
   {
    id:3,
    name:'ramana',
    age:'22',
    course:'b.tech',
    batch:'Ece'
   },
   {
    id:4,
    name:'ramana',
    age:'22',
    course:'b.tech',
    batch:'Ece'
   }
])
   const Addstudent=(name,age,course,batch)=>{
    setData([...data,{id:data.length,name,age,course,batch}])
   }
   const Update=(id,Editstudent)=>{
   setData(data.map((item)=>
    item.id===id ? Editstudent :item
   ))
   }
  return (
    <div>
     <studentdata.Provider value={{data,Addstudent,Update}}>
        {
            props.children
        }
     </studentdata.Provider>
    </div>
  )
}
