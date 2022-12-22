import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ContactUs } from '../Pages/ContactUs'
import { Error404 } from '../Pages/Error404'
import { Home } from '../Pages/Home'
import { Student } from '../Pages/Student'
import {AppNavbar} from '../Components/AppNavbar'
import { Addpage } from '../Pages/Addpage'
import StudentContext from '../ContextApi/StudentContext'
import Editpage from '../Pages/Editpage'
 const AppRouter = () => {
  return (
    <>
     <BrowserRouter>
     <AppNavbar/>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/Student' element={<StudentContext><Student/></StudentContext>} />
         <Route path='/ContactUs' element={<ContactUs/>} />
         <Route path='/Addpage' element={<StudentContext><Addpage/></StudentContext>}/>
         <Route path='/Editpage' element={<StudentContext><Editpage/></StudentContext>}/>
         <Route path='*' element={<Error404/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}
export default AppRouter
