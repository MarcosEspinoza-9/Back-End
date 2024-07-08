const express = require("express"); //* Aquí estamos importando el módulo express
const app = express(); //* estamos creando una instancia de una aplicación de Express.
const port = 3002; //* La aplicación escuchará en el puerto 3002.

//TODO: Aquí importamos los módulos necesarios: express
//TODO: fs para leer archivos y path para manejar rutas de archivos.
const fs = require("fs");
const path = require("path");
app.use(express.json());

//TODO: req es el objeto de solicitud
//TODO: res el objeto de respuesta
app.get("/", (req, res) => {
  const { name = "Marcos", lastName = "Espinoza" } = req.query; //* extraemos los parametros
  res.send(`Hola ${name} ${lastName}`); //* Enviar la respuesta

  //*   http://localhost:3002/?name=Juan&lastName=Perez
});

// Manejar la solicitud POST
app.post("/", (req, res) => {
  res.send("Recibida una solicitud POST");
});

// Manejar la solicitud PUT
app.put("/", (req, res) => {
  res.send("Recibida una solicitud PUT");
});

// Manejar la solicitud DELETE
app.delete("/", (req, res) => {
  res.send("Recibida una solicitud DELETE");
});

//*****************************************Agregar Ruta de Users Practica #2 ***********************************************

//TODO: PRUEBAS
//?   "http://localhost:3002/users"

//TODO: Manejar la solicitud GET para la ruta /users
app.get("/users", (req, res) => {
  //* = path.join--> para obtener la ruta completa al archivo.
  const filePath = path.join(__dirname, "Users.json"); //* dirname es una variable global en node  contiene la ruta al directorio del archivo en el que se está ejecutando el script.
  fs.readFile(filePath, "utf8", (err, data) => { //* Esta línea utiliza fs.readFile para leer el contenido del archivo Users.json. atrapando errores y y data como el contenido exitosod
    if (err) {
      res.status(500).send("Error al leer el archivo de usuarios");
    } else {
      const users = JSON.parse(data); //* data contiene el archivo leido que es una cadena de texto, y luego la parseamos y Convierte la cadena de texto JSON en un objeto JavaScript.
      res.json(users);
    }
  });
});


//TODO: Ruta GET para obtener un usuario por ID
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const filePath = path.join(__dirname, 'Users.json');

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error al leer el archivo de usuarios");
    } else {
      const users = JSON.parse(data);
      const user = users.find(u => u.id === userId);

      if (user) {
        res.json(user);
      } else {
        res.status(404).send("Usuario no encontrado");
      }
    }
  });
});


//TODO: Ruta POST para guardar un nuevo usuario
app.post('/users', (req, res) => {
  const newUser = req.body;
  const filePath = path.join(__dirname, 'Users.json'); //* obtenemos la ruta

  //* leemos la ruta
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error al leer el archivo de usuarios');
    } else {
      const users = JSON.parse(data);

      //* Asignar un nuevo ID al usuario
      const newId = (users.length + 1).toString();
      newUser.id = newId;

      users.push(newUser);

      //* stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
      fs.writeFile(filePath, JSON.stringify(users, null, 2), err => {
        if (err) {
          res.status(500).send('Error al guardar el nuevo usuario');
        } else {
          res.status(201).send('Usuario guardado correctamente');
        }
      });
    }
  });
});

//TODO: Ruta PUT para editar un usuario por ID
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  const filePath = path.join(__dirname, 'Users.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error al leer el archivo de usuarios');
    } else {
      let users = JSON.parse(data);
      const index = users.findIndex(u => u.id === userId);

      if (index !== -1) {
        // Actualizar el usuario encontrado
        users[index] = { ...users[index], ...updatedUser };

        // Escribir los usuarios actualizados de vuelta al archivo
        fs.writeFile(filePath, JSON.stringify(users, null, 2), err => {
          if (err) {
            res.status(500).send('Error al guardar el usuario actualizado');
          } else {
            res.send('Usuario actualizado correctamente');
          }
        });
      } else {
        res.status(404).send('Usuario no encontrado');
      }
    }
  });
});


//TODO: Ruta DELETE para borrar un usuario por ID
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  const filePath = path.join(__dirname, 'Users.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error al leer el archivo de usuarios');
    } else {
      let users = JSON.parse(data);
      const index = users.findIndex(u => u.id === userId);

      if (index !== -1) {
        // Eliminar el usuario encontrado del array
        users.splice(index, 1);

        // Escribir los usuarios actualizados de vuelta al archivo
        fs.writeFile(filePath, JSON.stringify(users, null, 2), err => {
          if (err) {
            res.status(500).send('Error al eliminar el usuario');
          } else {
            res.send('Usuario eliminado correctamente');
          }
        });
      } else {
        res.status(404).send('Usuario no encontrado');
      }
    }
  });
});


//TODO: Manejar la solicitud POST para la ruta /users
//*  app.get('/users', (req, res) => {
//*    res.send('Recibida una solicitud GET en /users');
//*  });

//TODO: Manejar la solicitud POST para la ruta /users
//*  app.post('/users', (req, res) => {
//*    res.send('Recibida una solicitud POST en /users');
//*  });

//TODO: Manejar la solicitud PUT para la ruta /users
//*  app.put('/users', (req, res) => {
//*    res.send('Recibida una solicitud PUT en /users');
//*  });

//TODO: Manejar la solicitud DELETE para la ruta /users
//*  app.delete('/users', (req, res) => {
//*    res.send('Recibida una solicitud DELETE en /users');
//*  });

//TODO: Manejar errores
app.use((req, res) => {
  res.status(404).send("Error 404: Endpoint no encontrado");
});

//TODO: Mensaje para mostrar en consola que se inicio el servidor
app.listen(port, () => {
  console.log(`Servidor levantado en el puerto ${port}`);
});

//************************Practica #2 - Endpoints ********************************************/

// Ruta GET para obtener todos los usuarios en formato JSON
