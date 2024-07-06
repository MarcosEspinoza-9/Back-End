
const express = require('express') //* Aquí estamos importando el módulo express
const app = express() //* estamos creando una instancia de una aplicación de Express.
const port = 3002 //* La aplicación escuchará en el puerto 3002.


//* req es el objeto de solicitud
//* res es el objeto de respuesta
app.get('/', (req, res) => {
    const { name = 'Marcos', lastName = 'Espinoza'} = req.query; //* extraemos los parmetros  
      res.send(`Hola ${name} ${lastName}`); //* Enviar la respuesta

    //*   http://localhost:3002/?name=Juan&lastName=Perez

    
  });

app.listen(port, () => {
  console.log(`Ejemplo , prueba ${port}`)
})
