// Inicio Proyecto con npm init

//Luego hago npm i express para instalar express

//git init para crear el repo local

//crear archivo .gitignore 

//En el archivo .gitignore ponemos los archivos/carpetas que queremos que git no siga, es decir ignora esos recursos 

//Requiero Express
const express = require('express');
//Inicio express, es decir su ejecucion
const app = express();
//Declaro el puerto
const port = 3000;
//Inicio el servidor en el puerto indicado con un callback
app.listen(port, ()=>console.log(`Servidor Iniciado en el puerto: ${port}`)
);
