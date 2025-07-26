import { useState } from 'react'
import './App.css'
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Dasbord from './components/Dasbord';
import CreateCamping from './components/CreateCamping';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify'
function App() {

  return (
    <>
    <BrowserRouter>
     <nav>
            <Navbar/>
      </nav>
      <ToastContainer />
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/dashbord' element={<Dasbord/>}/>
     <Route path='/createCamping' element={<CreateCamping/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
