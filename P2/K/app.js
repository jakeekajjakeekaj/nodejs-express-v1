// MEJORANDO SERVIDOR

const express = require('express');
const app = express();

const {infoCursos} = require('./cursos.js');

// Routing con Express
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
app.get('/api/cursos/programacion', (req, res)=> {
  res.send(JSON.stringify(infoCursos.programacion));
});

// ** FILTRAR POR LENGUAJE

// Supongamos que nosotros queremos filtrar a los cursos de programacion, un enfoque para conseguirlo sería:
// app.get('/api/cursos/programacion/python', (req, res)=> {
// });
// Sin embargo esto no sería nada eficiente, porque al tener muchos cursos, esto crearía demasiadas rutas y el código sería muy largo y similar al de las anteriores direcciones
// La otra manera de resolver esto y que es mucho más eficiente, sería usando los parámetros URL, en los parámetros URL se generaliza la información en la ruta, es decir :palabra, y la palabra se obtendrá a través del req, de esta manera se escribiría req.params, params se podría ver como parámetros pero continuemos, req.params.lenguaje y así posteriormente podremos trabajar que se cambie realizando:
// resultados = infoCursos.programacion.filter(curso=> curso.lenguaje === lenguaje);
// Finalizando así enviando la repsuesta, un ejemplo es:
app.get('/api/cursos/programacion/:lenguaje', (req, res)=> {
  const lenguaje = req.params.lenguaje;
  // Vamos  EXPLICAR LA LINEA DE ABAJO YA QUE ES LA QUE HACE TODO LA MAGIA:
  // para empezar se declara una constante llamada resultados, dentro de la misma estamos indicando la difección de infoCursos.programacion, es decir que acceda a todos los cursos que se tengan de programación, pero para este caso para acceder a cursos en específico declaramos .filter el cuál servirá para filtrar a las propiedades del propio objeto.
  // Una vez finalizado esto se declara una arrow function curso, al cual le declaramos la propiedad lenguaje, de esta manera infoCursos.programacion estará haciendo un recorrido alojando en curso su información y si la propiedad de curso.lenguaje (aquí se va haciendo el recorrido de cada lenguaje que se contiene), es igual a lenguaje (esta sería la variable declarada arriba) se van sumando a la onstante resultados, y es así como se va teniendo un arreglo con las filtraciones resultantes dentro de resultados
  const resultados = infoCursos.programacion.filter(curso=> curso.lenguaje === lenguaje);

  // En caso de tener resultados.length === 0, se indicaría que nunca se guardó nada en nuestro arreglo, por lo que nunca coincidió el lenguaje y mandaría un error
  if(resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  // Aquí únicamente imprimimos nuestro arreglo resultados convertido a JSON
  res.send(JSON.stringify(resultados));
})

// ** END LENGUAJE

// ** FILTRAR POR LENGUAJE Y NIVEL:

app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res)=> {
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
app.get('/api/cursos/matematicas', (req, res)=> {
  res.send(JSON.stringify(infoCursos.matematicas));
})

// Ahora comienza el filtro de matematicas
app.get('/api/cursos/matematicas/:tema', (req, res)=> {
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

// -- END CONEXION PUERTO

// AHORA EXISTEN OTRO TIPO DE PARÁMETROS, LOS CUALES SERÍAN LOS PARÁMETROS QUERY PARA ASÍ ORDENAR UNA LISTA POR EJEMPLO, PERO ESO SE VERÁ EN LA SIGUIENTE LECCIÓN