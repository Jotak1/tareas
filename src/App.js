import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Tarea from "./components/Tarea";

function App() {

  // tareas en local storage
  let tareasIniciales = JSON.parse(localStorage.getItem('tareas'));
  if(!tareasIniciales) {
    tareasIniciales = [];
  }
  // Arreglo de tareas
  const [tareas, guardarTareas] = useState(tareasIniciales);

  const crearTarea = (tarea) => {
    guardarTareas([...tareas, tarea]);
  };

  //useEffect paara actuar cuando el state cambia
  useEffect(() => {
    if(tareasIniciales){
      localStorage.setItem('tareas', JSON.stringify(tareas))
    } else{
      localStorage.setItem('tareas', JSON.stringify())
    }
  }, [tareas, tareasIniciales] );


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
