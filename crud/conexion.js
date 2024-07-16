
var mysql = require('mysql2');



//TODO: CREAR CONEXION. Parámetros de conexión a la base de datos.
 var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'empleados_db'
 });

//TODO: Funcion que nos permite comprobar la conexión a la base de datos.
 conexion.connect((err) => {
    if (err) throw err; //TODO: ATRAPAR EL ERROR
    console.log('Conectado con MySQL');

 });




 //TODO: LEER LOS DATOS DE LA TABLA}
 var sql = "SELECT * FROM trabajadores";
 conexion.query(sql, (err, results) => {
     if (err) throw err;
     
     //? Mostrar los resultados
     results.forEach(result => {
         console.log(result);
     });

     //! Cerrar la conexión
     conexion.end((err) => {
         if (err) throw err;
         console.log('Conexión cerrada.');
     });
 });
 