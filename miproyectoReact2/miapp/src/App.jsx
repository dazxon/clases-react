//importo esto para no tener la etiqueta padre molestando
import React from 'react'
import './App.css'
import { Header } from './components/Header/Header'

function App() {
  const palabra = "palabra"


  const objeto = {

  }


  return (
    //aplico react.fragment para no utilizar la etiqueta padre
    <React.Fragment>

      <p>App</p>

      {/* // "esunTexto" lo mando hacia parametro del componente header, se recibe como props palabra reservada */}
      <Header esuntexto={palabra}/>

      

    </React.Fragment>
  )

}

export default App
