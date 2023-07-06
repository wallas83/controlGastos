import { useState } from 'react'
import { Header } from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import { Modal } from './components/Modal';
import { generarId } from './helpers';
import { ListadoGastos } from './components/ListadoGastos';


function App() {
  const [presupuesto, setPresupuesto] = useState('');
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGasto] = useState([])
  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }
  const guardarGasto = gasto => {
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGasto([...gastos, gasto])
  }
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos ={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto &&
        <>
          <main>
            <ListadoGastos
              gastos = {gastos}
            />
          </main>
          <div className='nuevo-gasto'>
            <img
              src={IconoNuevoGasto}
              alt='icono nuevo gasto'
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      }

      {modal && <Modal
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
      />}

    </div>
  )
}

export default App
