import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ crearTarea }) => {
  //Crear State de tareas
  const [tarea, actualizarTarea] = useState({
    nombre: "",
    fecha: "",
    hora: "",
    descripcion: "",
  });
  const [error, actualizarError] = useState(false);

  const actualizarState = (e) => {
    actualizarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };
  //Extraer los valores
  const { nombre, fecha, hora, descripcion } = tarea;

  // Cuando se presiona agregar tarea
  const submitTarea = (e) => {
    e.preventDefault();

    // Validar
    if (
      nombre.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      descripcion.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    // Eliminar el mensaje previo
    actualizarError(false);
    // Asignar un ID
    tarea.id = uuidv4();
    // Crear la tarea
    crearTarea(tarea);
    // Reiniciar el form
    actualizarTarea({
      nombre: "",
      fecha: "",
      hora: "",
      descripcion: "",
    });
  };
  return (
    <Fragment>
      <h2>Crear Tarea</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submitTarea}>
        <label>Nombre Tarea</label>
        <input
          type="text"
          name="nombre"
          className="u-full-width"
          placeholder="Nombre Tarea"
          onChange={actualizarState}
          value={nombre}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Descripcion</label>
        <textarea
          name="descripcion"
          className="u-full-width"
          onChange={actualizarState}
          value={descripcion}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Tarea
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
