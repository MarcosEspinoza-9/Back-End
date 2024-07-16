-- Creación de la base de datos
CREATE DATABASE empleados_db;

-- Uso de la base de datos creada
USE empleados_db;

-- Creación de la tabla trabajadores
CREATE TABLE trabajadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    direccion VARCHAR(100),
    telefono VARCHAR(15),
    rfc VARCHAR(13) NOT NULL UNIQUE
);

select * from trabajadores;
