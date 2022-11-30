import { useState } from 'react'
import './App.css'
import { Header } from "./components/Header/Header";
import axios from "axios"
import { Buscador } from './components/Buscador/Buscador'

function App() {

  return (

    <div className='container'>

      <Buscador/>
      
    </div>

  )
}

export default App
