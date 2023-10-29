export const Tarea = ({contenido, eliminarTarea, saveCheckStatus}) => {
    return (
        <div className="tarea">
            <input type='checkbox' defaultChecked={contenido.checkStatus} onChange={(e) => { saveCheckStatus(Boolean(e.target.checked), contenido.id)}}/>
            <p>{contenido.descripcion}</p>
            <button 
            type="button"
            className="btnTarea"
            onClick={() => { eliminarTarea(contenido.id) }}>Eliminar</button>
        </div>
    )
}