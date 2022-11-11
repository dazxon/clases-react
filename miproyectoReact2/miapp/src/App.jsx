//importo esto para no tener la etiqueta padre molestando
import React from 'react'
import './App.css'

function App() {

  return (
    //aplico react.fragment para no utilizar la etiqueta padre
    <React.Fragment>

      <div className="App">
        hola bro
      </div>

      <div>
        div 2
      </div>

    </React.Fragment>
  )

}

export default App
