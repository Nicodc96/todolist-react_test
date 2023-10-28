import { useEffect, useState } from "react";
import { FormularioTareas } from "./FormularioTareas";
import { Tarea } from "./Tarea";

export const ListaTareas = () => {
    const [tareas, setTareas] = useState([]);

    const getTareas = async () => {
        const data = await JSON.parse(localStorage.getItem("tareas"));
        if (data){
            setTareas(data);
        }
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
                    ( <Tarea contenido={tarea} key={tarea.id} /> ))
                }
            </section>
        </>
    )
}