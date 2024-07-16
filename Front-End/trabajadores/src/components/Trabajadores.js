import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";

const TableTrabajadores = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/trabajadores")
      .then((response) => response.json())
      .then((data) => setDatos(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>direccion</th>
            <th>Telefono</th>
            <th>RFC</th>
          </tr>
        </thead>
        <tbody>
          {/*//* es un método de los arrays en JavaScript que se utiliza para iterar sobre cada elemento del array
                  //* y retornar un nuevo array con elementos transformados. */}
          {datos.map((dato) => (
            <tr key={dato.id}>
              <td>{dato.id}</td>
              <td>{dato.nombre}</td>
              <td>{dato.apellido}</td>
              <td>{dato.direccion}</td>
              <td>{dato.telefono}</td>
              <td>{dato.rfc}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableTrabajadores;
