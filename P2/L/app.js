// Parámetros Query y ROUTERS EXPRESS

// Los parámetros query vienen seguido de un signo de interrogación y recordemos que habiamos dicho que servían para filtrar, no mediante el routing recordemos, sino mediante esta sintaxis
// Un ejenplo es que después del routing se coloca el ?ordenar=vistas.
// EJEMPLO basándose en el códgio anterior:

const express = require('express');
const app = express();

const {infoCursos} = require('./cursos.js');

// -- STARTS Routers
// PROGRAMACION
// Los routers se definen con la constante y se crea un Router
const routerProgramacion = express.Router();
// Una vez creado se define su dirección especídifca para ese router
app.use('/api/cursos/programacion', routerProgramacion);

// MATEMATICAS
const routerMatematicas = express.Router();
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
  
  // Indica la ruta de los cursos de programacion
  // Aquí se hace el uso del router definido, antes la sintaxis era app.get('/api/cursos/programacion'), pero ahora cambia a:
routerProgramacion.get('/', (req, res)=> {
  res.send(JSON.stringify(infoCursos.programacion));
});

// ** FILTRAR POR LENGUAJE
routerProgramacion.get('/:lenguaje', (req, res)=> {
  const lenguaje = req.params.lenguaje;
  const resultados = infoCursos.programacion.filter(curso=> curso.lenguaje === lenguaje);

  if(resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  // ****** INICIO PARAMETROS QUERY *******
  // console.log(req.query.ordenar);
  // Si después de declarar esta linea escribimos http://localhost:3000/api/cursos/programacion/python?ordenar=vistas estamos ordenando por el criterio de vistas, y estamos imprimiendo en la consola que el criterio sería vistas
  // LO DE ARRIBA FUE UNA PRUEBA, AHORA:
  // si ?ordenar=vistas
  if(req.query.ordenar === 'vistas') {
    // el sort indica que en nuestro array resultados se tendrá en a el primer valor y en b el segundo valor, dicho esto se realiza una resta y si a.vistas - b.vistas tiene valor negativo, signific que a < b por lo ue se coloca primero, de lo contrairo se coloca después, así es como vendría funcionando sort
    return res.send(JSON.stringify(resultados.sort((a, b)=> a.vistas - b.vistas)));
  }
  // ****** END PARAMETROS QUERY *****

res.send(JSON.stringify(resultados));
});

// ** END LENGUAJE

// ** FILTRAR POR LENGUAJE Y NIVEL:

routerProgramacion.get('/:lenguaje/:nivel', (req, res)=> {
  // extracción de datos por la URL
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;

  // EVALUACION
  const resultados = infoCursos.programacion.filter(curso=> curso.lenguaje === lenguaje && curso.nivel === nivel);

  // validacion de resultado
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos para el lenguaje ${lenguaje} con el nivel ${nivel}`);
  }

  res.send(JSON.stringify(resultados));
})

// ** END LENGUAJE Y NIVEL

// -- END PROGRAMACION

// -- MATEMATICAS

// Indica la ruta de los cursos de matemáticas
routerMatematicas.get('/', (req, res)=> {
  res.send(JSON.stringify(infoCursos.matematicas));
})

// Ahora comienza el filtro de matematicas
routerMatematicas.get('/:tema', (req, res)=> {
  const tema = req.params.tema;
  const resultados = infoCursos.matematicas.filter(curso=> curso.tema === tema);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }

  res.send(JSON.stringify(resultados));
})

// -- END MATEMATICAS

// -- CONEXION PUERTO

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, ()=> {
  console.log(`El servidor está escuchando en el puerto ${PUERTO}...`);
});

// YA TENEMOS ALGO BASTANTE MEJOR FORMADO, SIN EMBARGO EL ARCHIVO SE ESTÁ HACIENDO MÁS GRANDE Y MENOS LEGIBLE, POR LO TANTO EN LA SIGUIENTE LECCIÓN SE VERÁ EL CÓMO SEPARAR LAS COSAS EN DIFERENTES ARCHIVOS