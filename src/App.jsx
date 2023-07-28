import { useState } from 'react'
import DashboardLayout from './Components/dashboard'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/carousal'
import Category from './Components/category'
import Description from './Components/description'
import Errorpage from './Components/errorpage'


function App() {
  

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Category />} />
        <Route path='/description' element={<Errorpage />} />
        <Route path='/description/:id' element={<Description />} />
      </Routes>
      
    </>
  )
}

export default App
