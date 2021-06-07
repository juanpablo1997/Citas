import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({ cita, eliminarCita }) => {

    const { paciente, profesional, fecha, hora, procedimiento } = cita;

    return (
        <div className = "cita">
            <p>Paciente: <span> { paciente } </span> </p>
            <p>Profesional: <span> { profesional } </span> </p>
            <p>Fecha: <span> { fecha } </span> </p>
            <p>Hora: <span> { hora } </span> </p>
            <p>Procedimiento: <span> { procedimiento } </span> </p>

            <button
                className = "button eliminar u-full-width button-primary"
                onClick = { () => eliminarCita(cita.id) }
            >Eliminar Cita</button>
        </div>
    )
}

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;
