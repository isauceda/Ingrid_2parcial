-- Active: 1706152269886@@127.0.0.1@5432@postgres@public

create table tbl_rol
(
    id serial PRIMARY key,
    nombre_rol varchar (200),
    fecha_creacion TIMESTAMP DEFAULT current_timestamp,
    activo BOOLEAN DEFAULT true
);

create table tbl_usuarios
(
    nombre_usuario varchar (20) primary key ,
    correo_electronico varchar (50),
    contrasena varchar (20),
    nombre varchar (200),
    apellido varchar (200),
    foto_perfil bytea,
    id_rol int REFERENCES tbl_rol(id),
    fecha_creacion TIMESTAMP DEFAULT current_timestamp,
    activo BOOLEAN DEFAULT true
);