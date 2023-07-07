import { useEffect, useState } from 'react';
import CerrarBtn from '../img/cerrar.svg'
import { Mensaje } from './Mensaje';

export const Modal = ({ 
    setModal, 
    animarModal, 
    setAnimarModal, 
    guardarGasto,
    gastoEditar,
    setGastoEditar
}) => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [fecha, setFecha] = useState('');
    const [id, setId] = useState('');
    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0 ) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
      
    }, [])
    

    const ocultarModal = () => {
        setAnimarModal(false);
        setGastoEditar({})
        setTimeout(() => {
            setModal(false);
        }, 500);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cantidad < 0) {
            setMensaje('La cantidad debe ser mayor que cero');
            setTimeout(() => {
                setMensaje('');
            }, 1000)
            return
        }
        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos deven ser obligatorios');
            setTimeout(() => {
                setMensaje('');

            }, 1000)
            return
        }

        guardarGasto({ nombre, cantidad, categoria, id, fecha});

        setAnimarModal(false);

        setTimeout(() => {
            setModal(false);
        }, 500);
    }
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CerrarBtn}
                    alt='Cerrar modal'
                    onClick={ocultarModal}
                />
            </div>
            <form
                onSubmit={handleSubmit}
                className={`formulario ${animarModal && 'animar'}`}>
                <legend>{ gastoEditar.nombre ? 'Editar gasto' :'Nuevo gasto'}</legend>
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
                <div className='campo'>
                    <label htmlFor='nombre'>Nombre Gasto</label>
                    <input
                        id='nombre'
                        type='text'
                        placeholder='adicinar el nombre del gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='cantidad'>Cantidad</label>
                    <input
                        id='cantidad'
                        type='number'
                        placeholder='adicinar la cantidad del gasto'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='categoria'>Categoria</label>
                    <select
                        id='categoria'
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value=''> -- Seleccione --</option>
                        <option value='ahorro'>Ahorro</option>
                        <option value='comida'>Comida </option>
                        <option value='casa'> Casa</option>
                        <option value='gastos'> Gastos  </option>
                        <option value='ocio'> Ocio  </option>
                        <option value='salud'> Salud</option>
                        <option value='suscripciones'> Suscripciones</option>
                    </select>

                </div>
                <input
                    type='submit'
                    value={ gastoEditar.nombre ? 'Guardar cambios' :'Adicionar gasto'}
                />
            </form>
        </div>
    )
}
