import { useState } from "react";

export const FormularioTareas = ({listaTareas}) => {
    const [tareaDesc, setTareaDesc] = useState("");

    const agregarTarea = () => {
        /* Crear mi tarea */
        // Si la lista NO está vacía, agarro el último id registrado
        // y le sumo +1
        if (tareaDesc.length > 0){
            if (listaTareas.length > 0){
                listaTareas.push(
                    {
                        // 'listaTareas[listaTareas.length - 1]' siempre me trae el último
                        // elemento de mi array 'tareas' del localStorage
                        id: listaTareas[listaTareas.length - 1].id + 1,
                        descripcion: tareaDesc,
                        checkStatus: false
                    }
                )
            } else{
                // Si la lista ESTA vacía, creo un elemento de id: 1            
                listaTareas.push(
                    {
                        id: 1,
                        descripcion: tareaDesc,
                        checkStatus: false
                    }
                )
            }
        }
        localStorage.setItem("tareas", JSON.stringify(listaTareas));
    }

    return (
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
    )
}