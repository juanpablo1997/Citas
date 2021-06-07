import React, { Fragment, useState } from "react";
import uuid from "uuid/dist/v4";
import "../index.css";

const Formulario = ({ crearCita }) => {
  //Crear State de citas
  const [cita, actualizarCita] = useState({
    paciente: "",
    profesional: "",
    fecha: "",
    hora: "",
    procedimiento: "",
  });

  const [error, actualizarError] = useState(false);

  //Función que se ejecuta cada que el usuario escribe en un input
  const handleChange = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer los valores
  const { paciente, profesional, fecha, hora, procedimiento } = cita;

  //Cuando el usuario presiona agregar cita
  const submitCita = (e) => {
    e.preventDefault();

    //Validar
    if (
      paciente.trim() === "" ||
      profesional.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      procedimiento.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    //Eliminar el mensaje previo
    actualizarError(false);

    //Asignar un ID
    cita.id = uuid();

    //Crear la cita
    crearCita(cita);

    //Reiniciar el form
    actualizarCita({
      paciente: "",
      profesional: "",
      fecha: "",
      hora: "",
      procedimiento: "",
    });
  };

  return (
    <>
      <h2> Crear Cita</h2>

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form className="form" onSubmit={submitCita}>
        <label>Nombre Paciente</label>
        <input
          type="text"
          name="paciente"
          className="u-full-width"
          placeholder="Nombre Paciente"
          onChange={handleChange}
          value={paciente}
        />
        <label>Nombre Profesional</label>
        <input
          type="text"
          name="profesional"
          className="u-full-width"
          placeholder="Nombre Profesional"
          onChange={handleChange}
          value={profesional}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />
        <label>Hora de la cita</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />
        <label>Procedimiento</label>
        <textarea
          className="u-full-width"
          name="procedimiento"
          onChange={handleChange}
          value={procedimiento}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

export default Formulario;
