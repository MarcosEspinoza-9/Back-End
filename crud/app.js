const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); //? Importa la librería cors

const app = express();
app.use(cors()); //? Usa cors como middleware para permitir todas las solicitudes CORS


const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'empleados_db'
});

//TODO: Chequear la conexión con MySQL y loguear un mensaje en caso de error
conexion.connect(err => {
    if (err) {
        console.error('Error en conectar con MySQL:', err);
        return;
    }
    console.log('CONECTADO A MySQL');
});

//TODO: Configurar una ruta para obtener todos los trabajadores
app.get('/api/trabajadores', (req, res) => {
    const sql = 'SELECT * FROM trabajadores'; //? CONSULTA SQL
    conexion.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).json({ error: 'Error fetching data' });
            return;
        }
        res.json(results);
    });
});
















//TODO: Mensaje en consola cuando se levanta el servidor 
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`SERVIDOR CORRIENDO EN EL PUERTO:    ${PORT}`);
});
