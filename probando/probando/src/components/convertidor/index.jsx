import React from 'react';
import './Convertidor.css'


const Convertidor = () => {

    



    return(
        
        <div className='container'>
            <h2>Convertidor de pesos a dolares</h2>

            <label htmlFor="">Pesos</label>
            <input type="number" />

            <label htmlFor="">Dolares</label>
            <input type="number" />

            <input type="submit" value={"Enviar"} />


        </div>
    )
}

export { Convertidor }