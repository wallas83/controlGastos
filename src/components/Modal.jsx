import CerrarBtn from '../img/cerrar.svg'

export const Modal = ({ setModal, animarModal, setAnimarModal }) => {

    const ocultarModal = () => {
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
            <form className={`formulario ${animarModal && 'animar'}`}>
                <legend>NUevo gasto</legend>
                <div className='campo'>
                    <label htmlFor='nombre'>Nombre Gasto</label>
                    <input
                        id='nombre'
                        type='text'
                        placeholder='adicinar el nombre del gasto'
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='cantidad'>Cantidad</label>
                    <input
                        id='cantidad'
                        type='number'
                        placeholder='adicinar la cantidad del gasto'
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='categoria'>Categoria</label>
                    <select
                        id='categoria'
                    >
                        <option value=''> -- Seleccione --</option>
                        <option value='ahorro'>Ahorro</option>
                        <option value='comida'>Comida </option>
                        <option value='casa'> Casa</option>
                        <option value='gastos'> Gastos  </option>
                        <option value='ocio'> Ocio  </option>
                        <option value='salud'> Salus</option>
                        <option value='suscripciones'> Suscripciones</option>
                    </select>

                </div>
                <input
                type='submit'
                value='adicionar gastos'
                />
            </form>
        </div>
    )
}
