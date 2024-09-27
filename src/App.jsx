
import Header from './assets/pages/Header'
import '../src/style.css'
import Footer from './assets/pages/Footer'
import { Route, BrowserRouter as Routers, Routes } from "react-router-dom"
import Signin from './assets/pages/Signin'
import Index from './Home'
import Signup from './assets/pages/Signup'
import Skate from './assets/pages/Skate'
import Clothing from './assets/pages/Clothing'
import Shoes from './assets/pages/Shoes'
import { useEffect, useState } from 'react'
import View from './assets/pages/View'
import View2 from './assets/pages/View2'
import About from './assets/pages/About'
import View3 from './assets/pages/View3'


const App = () => {

  return (
      <div>


        <Routers>

          <Routes>
            <Route path="/signin" element={<Signin />}></Route>

            <Route path="/" element={<Index />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/skate' element={<Skate />}></Route>
            <Route path='/clothing' element={<Clothing />}></Route>
            <Route path='/shoes' element={<Shoes />}></Route>
            <Route path='/view/:id' element={<View />}></Route>
            <Route path='/view2/:id' element={<View2 />}></Route>
            <Route path='/view3/:id' element={<View3 />}></Route>
            <Route path='/about' element={<About/>}></Route>
           
          </Routes>


        </Routers>
      </div>
  )
}

export default App
