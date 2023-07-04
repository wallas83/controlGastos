import React from 'react'
import { NuevoPresupuesto } from './NuevoPresupuesto'
import { ControlPresupuesto } from './ControlPresupuesto'

export const Header = ({

    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto,
    isValidPresupuesto
}) => {
    return (
        <header>
           <h1>PLanificador de gastos</h1>
            {
                isValidPresupuesto
                    ? <ControlPresupuesto
                        presupuesto = {presupuesto}
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
