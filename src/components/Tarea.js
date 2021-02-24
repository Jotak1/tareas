import React from 'react';
import PropTypes from 'prop-types';

const Tarea = ({tarea, eliminarTarea}) => {
    return (
    <div className="tarea">
        <p>Tarea: <span>{tarea.nombre}</span></p>
        <p>Fecha: <span>{tarea.fecha}</span></p>
        <p>Hora: <span>{tarea.hora}</span></p>
        <p>Descripcion: <span>{tarea.descripcion}</span></p>
        <button
            className="button eliminar u-fullwidth"
            onClick={() => eliminarTarea(tarea.id)}
        >Eliminar &times;</button>
    </div>
    )}
Tarea.propTypes = {
    tarea: PropTypes.object.isRequired,
    eliminarTarea: PropTypes.func.isRequired
    } 

export default Tarea;