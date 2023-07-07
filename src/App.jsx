import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import { Modal } from './components/Modal';
import { generarId } from './helpers';
import { ListadoGastos } from './components/ListadoGastos';
import { Filtros } from './components/Filtros';


function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGasto] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )
  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] =useState([])
  

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0 ) {
      setModal(true);
     
      setTimeout(() => {
        setAnimarModal(true)
      }, 500)
    }
  
    
  
  }, [gastoEditar]);

  // useEffect para el localStorage depresupuesto

  useEffect(() => {
   localStorage.setItem('presupuesto', presupuesto ?? 0);

    
  }, [presupuesto])
  // useEffect para el localStorage para los gastos

  useEffect(() => {
   localStorage.setItem('gastos', JSON.stringify(gastos ) ?? []) 
    
  }, [gastos])
  

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;
   if(presupuestoLS > 0){
    setIsValidPresupuesto(true)
   }
  }, [])

  // filtrar segun al cambio del filtro
  useEffect(() => {
   if(filtro){
    const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
    setGastosFiltrados(gastosFiltrados)
  }
  }, [filtro])
  
  
  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({});
    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }
  const guardarGasto = gasto => {
    if(gasto.id){
      // actualizxar
      // const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      const gastosActualizados = gastos.map(gastoState => {
        if(gastoState.id === gasto.id){
         return  { ...gasto, fecha: Date.now() };
        }
        return gastoState
      })
      setGasto(gastosActualizados);
      setGastoEditar({})
    }else {
      // Nuevo gasto
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGasto([...gastos, gasto])
    }
  
  }
  const eliminarGasto = id => {
   const gastosActulizados =  gastos.filter( gastoState => gastoState.id !== id )
   setGasto(gastosActulizados)
  }
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos ={gastos}
        setGasto = {setGasto}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto &&
        <>
          <main>
            <Filtros
              filtro ={filtro}
              setFiltro = {setFiltro}
            />
            <ListadoGastos
              gastos = {gastos}
              setGastoEditar = {setGastoEditar}
              eliminarGasto  ={eliminarGasto}
              filtro = {filtro}
              gastosFiltrados = {gastosFiltrados}
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
        gastoEditar ={gastoEditar}
        setGastoEditar = {setGastoEditar}
      />}

    </div>
  )
}

export default App
