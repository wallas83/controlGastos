import React, { useState } from 'react'
import { Mensaje } from './Mensaje';

export const NuevoPresupuesto = ({ 
    
    presupuesto, 
    setPresupuesto,
    setIsValidPresupuesto
}) => {

const [mensaje, setMensaje] = useState('');

   const handlePresupuesto = (e) => {
        e.preventDefault();
        if( !Number(presupuesto) || Number(presupuesto) < 0 || /^0\d+$/.test(presupuesto)){
                    setMensaje('No es un presupuesto valido');
                    return
        }
        setMensaje('')
        setIsValidPresupuesto(true)
   }
   const onChangePresupuesto = ({target}) => {

    setPresupuesto(Number(target.value));
    
 
   }
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handlePresupuesto} className='formulario'>
                <div className='campo'>
                    <label>Definir presupuesto</label>
                    <input
                        className='nuevo-presupuesto'
                        type='number'
                        placeholder='Adicionar tu Presupeusto'
                        value={presupuesto}
                        onChange={ onChangePresupuesto}
                    />
                </div>
                <input type='submit' value='adicionar' />
                {mensaje && <Mensaje tipo= "error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
}
