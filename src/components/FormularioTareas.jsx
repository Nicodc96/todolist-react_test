import { useState } from "react";
import SweetAlert2 from "react-sweetalert2";

export const FormularioTareas = ({listaTareas}) => {
    const [tareaDesc, setTareaDesc] = useState("");
    const [alertAdd, setAlertAdd] = useState(false);

    const agregarTarea = (e) => {
        e.preventDefault();
        /* Genero un objeto tarea que servirá para ambos casos */
        const preTarea = {
            descripcion: tareaDesc,
            checkStatus: false
        };
        // Crear mi tarea
        if (tareaDesc.length > 0){
            listaTareas.length > 0 ?
            /*  Si la lista NO está vacía, agarro el último id registrado y le sumo +1,
                'listaTareas[listaTareas.length - 1]' siempre me trae el último
                elemento de mi array 'tareas' del localStorage */ 
                preTarea.id = listaTareas[listaTareas.length - 1].id + 1
            /*  Si la lista ESTA vacía, creo un elemento de id: 1 porque será el primero */
                : preTarea.id = 1;
            
            // Al asignar el ID, lo agrego al array a guardar
            listaTareas.push(preTarea);

            // Al terminar, guardo el array en el localStorage y muestro la alerta de sweetalert
            localStorage.setItem("tareas", JSON.stringify(listaTareas));
            setAlertAdd(true);
        }
    }

    
    return (
        <>
            <form className="formTarea" onSubmit={agregarTarea}>
                <input type="text" 
                id="inputAgregarTarea" 
                placeholder="Escriba aquí.."
                onChange={(e) => {setTareaDesc(e.target.value)}}/>
                <button 
                type="submit">
                Agregar
                </button>
            </form>
            <SweetAlert2 
                show={alertAdd}
                title="Agregado"
                text="Se ha creado exitosamente la tarea"
                icon="warning"
                confirmButtonText="Aceptar"
                onConfirm={() => {
                    setAlertAdd(false);
                    location.reload();
                }}
            />
            
        </>
    )
}