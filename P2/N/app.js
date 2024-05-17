// MANEJO DE DISTINTOS MÉTODOS HTTP: POST, PUT, PATCH, DELETE

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

// HASTA AQUÍ SE PERMITE QUE EL CLIENTE PUEDA ESTAR OBTENER, MODIFICAR, ELIMINAR LA INFORMACIÓN, ES DECIR QUE ESTAMOS MANEJANDO DE BUNA MANERA LO QUE SERÍA NUESTRA API Y LOS ROUTING, ETC.

// Para los errores 404 nosotros podemos usar .end() en vez de definir un mensaje, para que así salga el típico anuncion de google de "PAGE NOT FOUND :/", de lo contrario nosotros podemos definir un mensaje y saldrá difernete contenido