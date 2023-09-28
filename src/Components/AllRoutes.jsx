import React from 'react'
import { Routes, Route } from 'react-router'
import { TextForms } from './TextForms'
import About from './About'

export default function AllRoutes(props) {
  return (
    <Routes>
        <Route path='/' element={<TextForms mode={props.mode} toggleMode={props.toggleMode} showAlert={props.showAlert}/>}/>
        <Route path='/about' element={<About mode={props.mode}/>}/>
        {/* <Route path='/contact' element={<Comtact/>}/> */}
    </Routes>
  )
}
