
const express = require('express') //* Aquí estamos importando el módulo express
const app = express() //* estamos creando una instancia de una aplicación de Express.
const port = 3002 //* La aplicación escuchará en el puerto 3002.


//TODO: req es el objeto de solicitud
//TODO: res el objeto de respuesta
app.get('/', (req, res) => {
    const { name = 'Marcos', lastName = 'Espinoza'} = req.query; //* extraemos los parmetros  
      res.send(`Hola ${name} ${lastName}`); //* Enviar la respuesta

    //*   http://localhost:3002/?name=Juan&lastName=Perez
  });

// Manejar la solicitud POST
app.post('/', (req, res) => {
    res.send('Recibida una solicitud POST');
  });
  
  // Manejar la solicitud PUT
  app.put('/', (req, res) => {
    res.send('Recibida una solicitud PUT');
  });
  
  // Manejar la solicitud DELETE
  app.delete('/', (req, res) => {
    res.send('Recibida una solicitud DELETE');
  });
  
  //*****************************************Agregar Ruta de Users Practica #2 ***********************************************

//*   Pruebas
//*   "http://localhost:3002/users"

  // Manejar la solicitud GET para la ruta /users
app.get('/users', (req, res) => {
    res.send('Recibida una solicitud GET en /users');
  });
  
  // Manejar la solicitud POST para la ruta /users
  app.post('/users', (req, res) => {
    res.send('Recibida una solicitud POST en /users');
  });
  
  // Manejar la solicitud PUT para la ruta /users
  app.put('/users', (req, res) => {
    res.send('Recibida una solicitud PUT en /users');
  });
  
  // Manejar la solicitud DELETE para la ruta /users
  app.delete('/users', (req, res) => {
    res.send('Recibida una solicitud DELETE en /users');
  });


  // Manejar errores
  app.use((req, res) => {
    res.status(404).send('Error 404: Endpoint no encontrado');
  });


  app.listen(port, () => {
    console.log(`Servidor levantado en el puerto ${port}`)
  })
  
//************************Practica #2 - Endpoints ********************************************/



