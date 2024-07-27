import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import DisplayAlbum from './pages/DisplayAlbum/DisplayAlbum'
const Display = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/album/:id' element={<DisplayAlbum/>}></Route>
      </Routes>
    </div>
  )
}

export default Display
