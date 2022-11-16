import React from 'react';
import { useState } from 'react';
import styles from './style.convertidor.module.css'


const Convertidor = () => {

    const{container,input_container} = styles

    const[pesos,setPesos] = useState(0)

    const[dolares,setDolares] = useState(0)

    return(
        
        <div className={container}>
            <h2>Convertidor de pesos a dolares</h2>

            <div className={input_container}>

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

        </div>
    )
}

export { Convertidor }