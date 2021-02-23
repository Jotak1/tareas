import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Tarea from "./components/Tarea";

function App() {
  // Arreglo de tareas
  const [tareas, guardarTareas] = useState([]);

  const crearTarea = (tarea) => {
    guardarTareas([...tareas, tarea]);
  };

  const eliminarTarea = (id) => {
    const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
    guardarTareas(nuevasTareas);
  };

  const titulo =
    tareas.length === 0 ? "No hay Tareas" : "Administra tus Tareas";

  return (
    <Fragment>
      <h1>Administracion de Tareas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearTarea={crearTarea} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {tareas.map((tarea) => (
              <Tarea
                key={tarea.id}
                tarea={tarea}
                eliminarTarea={eliminarTarea}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
