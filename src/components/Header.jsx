import React from 'react'
import { NuevoPresupuesto } from './NuevoPresupuesto'
import { ControlPresupuesto } from './ControlPresupuesto'

export const Header = ({
    gastos,
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto,
    isValidPresupuesto,
    setGasto
}) => {
    return (
        <header>
           <h1>PLanificador de gastos</h1>
            {
                isValidPresupuesto
                    ? <ControlPresupuesto
                        presupuesto = {presupuesto}
                        gastos= {gastos}
                        setGasto = {setGasto}
                        setPresupuesto = {setPresupuesto}
                        setIsValidPresupuesto={setIsValidPresupuesto}
                    />
                    : <NuevoPresupuesto
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        setIsValidPresupuesto={setIsValidPresupuesto}
                    />
            }

        </header>
    )
}
