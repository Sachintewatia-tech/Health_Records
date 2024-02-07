import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../Pages/HomePage/Home'
import SignUp from '../Pages/SignUp/SignUp'
import Login from '../Pages/Login/Login'
import AddNew from '../Pages/AddNew/AddNew'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/newpatient' element={<AddNew/>}></Route>
    </Routes>
  )
}

export default AllRoutes
