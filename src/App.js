import React, { Fragment, useState, useEffect } from 'react';
import Cita from './components/Cita';
import Formulario from './components/Formulario';
import PropTypes from 'prop-types';

function App() {

  // Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (!citasIniciales) {
      citasIniciales = [];
    }

  // Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // UseEffect para realizar ciertad operaciones cuando el state cambia 
  useEffect(() => {
    if ( citasIniciales ) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasIniciales]);

  // Funcion que toma las citas actuales y agrega una nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas, cita
    ])
  }

  // Funcion que elimina una cita por su ID
  const eliminarCita = id => {
    const nuevasCitas = citas.filter( cita => cita.id !== id ) //el filter elimina con el diferente !==
    guardarCitas(nuevasCitas);
  }

  // Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Tus citas';

  return (
      <>
        <div className = "container-img">
            <img src = "https://www.ces.edu.co/wp-content/uploads/2018/12/odontologia.jpg" className = "imagen" alt = ""/>
        </div>

        <h1 className = "titulo">Administrador de Pacientes</h1>

        <div className = "container">
          <div className = "row">

            <div className = "one-half column">
              <Formulario 
                crearCita = { crearCita }
              />
            </div>

            <div className = "one-half column">
              <h2> { titulo } </h2>
              { citas.map( cita => (
                <Cita 
                  key = { cita.id }
                  cita = { cita }
                  eliminarCita = { eliminarCita }
                />
              ))}
            </div>

          </div> 
        </div>
      </> 
  );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}


export default App;
