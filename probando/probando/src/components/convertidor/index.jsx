import React from 'react';
import { useState } from 'react';
import './Convertidor.css'


const Convertidor = () => {

    const[pesos,setPesos] = useState(0)

    const[dolares,setDolares] = useState(0)

    const misPesos = () => {
        
    }

    const misDolares = () => {
        
    }

    return(
        
        <div className='container'>
            <h2>Convertidor de pesos a dolares</h2>

            <label htmlFor="">Pesos</label>
            <input type="number" value={pesos} onChange={(x)=>{
                setPesos(x.target.value)
                setDolares((x.target.value/300).toFixed(2))
                }}/>

            <label htmlFor="">Dolares</label>
            <input type="number" value={dolares} onChange={(x)=>{
                setDolares(x.target.value)
                setPesos((x.target.value*300).toFixed(2))
                }}/>

            <input type="submit" value={"Enviar"} />


        </div>
    )
}

export { Convertidor }