// PRIMER PROYECTO CON EXPRESS

// Para empezar EXPRESS es un paquete, por lo que tenemos que abrir nuestra trminal y escribir npm init, de ahí en fuera escribimos el nombre, descripción, en entry point definimos app.js, definimos autor y todo lo demás se queda en predeterminado

// Una vez finalizado este paso escribiremos npm install express
// Una vez finalziado, dentro de nuestra carpeta nos aparecerá un package-lock.json y a su vez dentro de la carpeta de package.json, en la sección de dependencias nos aparecerá express y su versión.

// Una vez finalizados estos pasos ya podemos escribir:

const express = require('express');
const app = express();

// Hasta este punto, normalmente se trabajaría con una Base de Datos, pero al no tener una Base de Datos se procederá a simular una, dentro del archivo titulado "cursos.js"
// Se procede a importar la base de datos simulada con desestructuración del objeto usando {} para así solo extraer una sección del módulo
const {infoCursos} = require('./cursos.js');

// Routing con Express
app.get('/', (req, res)=> {
  res.send('Mi primer servidor.');
});

// Cabe mencionar que en este caso nosotros estamos asignando un PUERTO de forma manual, sin embargo normalmente el puerto se nos asignará y muy probablmeente de forma dinámica ya cuando estemos alojando en algún servidor, tomando esto en cuenta lo normalmenteusado es en vez de escribir 3000, escribiríamos: process.env.PORT || 3000;
// Lode arriba quiere decir que tomará el puerto dinámico o de lo contrario que se elija uno establecido
const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, ()=> {
  console.log(`El servidor está escuchando en el puerto ${PUERTO}...`);
});

// Una vez finalizado esto, escribimos node app.js para probar la aplicación y todo está sin probelmas, también recordemos que podemos usar nodemon app.js para que se actualice todo automáticamente.

// Hasta aquí se ha conseguido crear el primer servidor haciendo uso de Express, en las siguientes secciones se irá complementando al código