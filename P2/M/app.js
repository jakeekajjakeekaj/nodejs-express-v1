// Routers en distintos archivos

// EJEMPLO basándose en el códgio anterior:

const express = require('express');
const app = express();

const {infoCursos} = require('./datos/cursos.js');

// -- STARTS Routers
// PROGRAMACION
const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);

// MATEMATICAS
const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);

// -- ENDS ROUTERS

// ROUTING

// '/' Indica la ruta HOME
app.get('/', (req, res)=> {
  res.send('Mi primer servidor.');
});
  
  // Indica la ruta de cursos
app.get('/api/cursos', (req, res)=> {
  res.send(JSON.stringify(infoCursos));
});
  
  // -- PROGRAMACION

// -- END PROGRAMACION

// -- MATEMATICAS

// -- END MATEMATICAS

// -- CONEXION PUERTO

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, ()=> {
  console.log(`El servidor está escuchando en el puerto ${PUERTO}...`);
});

// YA PUDIMOS MANEJAR LOS ROUTERS Y LOS DATOS POR SEPARADO, AHORA LO QUE SE PROCEDERÁ A HACER EN LA SIGUINETE LECCIÓN ES TRABAJAR CON LOS DIFERENTES MÉTODOS HTTP, ES DECIR POST, PUT, PATCH Y DELETE