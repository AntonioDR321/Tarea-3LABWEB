import React, { useState, useEffect } from 'react';  // Importar useState y useEffect

function App() {
  const [data, setData] = useState([]);  // Inicializa el estado 'data'

  useEffect(() => {
    fetch('http://localhost:8081/usuarios')
      .then(res => res.json())
      .then(data => setData(data))  // Actualiza el estado con la respuesta
      .catch(err => console.log(err));  // Maneja los errores
  }, []);  // El segundo argumento vacío asegura que se ejecute solo una vez al cargar el componente

  return (
    <div style={{ padding: "50px" }}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>FechaNacimiento</th>
            <th>FechaRegistro</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.UsuarioID}</td>  {/* Cambiado a UsuarioID */}
              <td>{d.Nombre}</td>  {/* Cambiado a Nombre */}
              <td>{d.Correo}</td>  {/* Cambiado a Correo */}
              <td>{d.FechaNacimiento}</td>  {/* Cambiado a FechaNacimiento */}
              <td>{d.FechaRegistro}</td>  {/* Cambiado a FechaRegistro */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
