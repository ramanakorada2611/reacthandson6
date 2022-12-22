import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { studentdata } from '../ContextApi/StudentContext';


export const Student = () => {

  const {data}=useContext(studentdata)// import from contextapi
  const nav=useNavigate();
  const NavFunction=()=>{
    
      nav('/Addpage')
  }
  return (
    <><br/>
     <h1 className='studentpage text-center'>Students Details:</h1>
    <button className='move' onClick={NavFunction}>Add Details</button>
    <center>
    <table>
       <thead><tr>
        <th>NAME</th>
        <th>AGE</th>
        <th>COURSE</th>
        <th>BATCH</th>
        <th>CHANGE</th>
      </tr>
      </thead>
      <tbody>
        {
          data.map((item)=>{
            return(
              <tr key={item.id} >
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.course}</td>
                <td>{item.batch}</td>
                <td><Link to='/Editpage' state={{ ECE: {item} }}>Edit</Link></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    </center>
    </>
  )
}
