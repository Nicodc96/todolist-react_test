import { useEffect, useState } from "react";
import { FormularioTareas } from "./FormularioTareas";
import { Tarea } from "./Tarea";
import SweetAlert2 from "react-sweetalert2";

export const ListaTareas = () => {
    const [tareas, setTareas] = useState([]);
    const [alertDelete, setAlertDelete] = useState(false);
    const [idTareaDelete, setIdTareaDelete] = useState(0);

    const getTareas = async () => {
        const data = await JSON.parse(localStorage.getItem("tareas"));
        if (data){
            setTareas(data);
        }
    }

    const eliminarTarea = (id) => {
        setIdTareaDelete(id);
        setAlertDelete(true);
    }

    const saveCheckStatus = (checked, id) => {
        tareas.forEach(tarea => {
            if (tarea.id === id) tarea.checkStatus = checked;
        });
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    useEffect(() => {
        getTareas();
        // Si se edita el localStorage a mano, este evento re-renderiza ListaTareas
        window.addEventListener("storage", () => {
            setTareas(JSON.parse(localStorage.getItem("tareas")));
        });
    }, []);

    return (
        <>
            <section className="formularioTareas">
                <FormularioTareas listaTareas={tareas}/>
            </section>
            <section className="listaTareas">
                { tareas.map((tarea) => 
                    ( <Tarea contenido={tarea} key={tarea.id} eliminarTarea={eliminarTarea} saveCheckStatus={saveCheckStatus} /> ))
                }
                <SweetAlert2 
                show={alertDelete}
                title="Atención"
                text="¿Desea eliminar la tarea?"
                icon="warning"
                confirmButtonText="Aceptar"
                confirmButtonColor="#3085d6"
                showCancelButton="true"
                cancelButtonText="Cancelar"
                cancelButtonColor="#d33"
                onResolve={(result) => {
                    if (result.isConfirmed){
                        localStorage.setItem("tareas", JSON.stringify(tareas.filter(tarea => tarea.id !== idTareaDelete)));
                        setAlertDelete(false);
                        location.reload();
                    }
                    if (result.isDismissed){
                        setAlertDelete(false);
                    }
                }}
            />
            </section>
        </>
    )
}