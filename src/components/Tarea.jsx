export const Tarea = ({contenido}) => {
    return (
        <div className="tarea">
            <p>Estado check: {contenido.checkStatus ? "True" : "False"}</p>
            <p>{contenido.descripcion}</p>
            <button type="button">Eliminar</button>
        </div>
    )
}