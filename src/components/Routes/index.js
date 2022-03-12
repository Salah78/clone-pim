import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../../pages/About'
import Home from '../../pages/Home'
import Profile from '../../pages/Profile'

const index = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>    
    </BrowserRouter>
    )
}

export default index