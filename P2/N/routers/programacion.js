const express = require('express');

const {programacion} = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router();

// Es un MIDDLEWARE y permite procesar el cuerpo de la solicitud en formato JSON y poder trabajar con ese cuerpo de la solicitud dentro del código, como con la propiedad body
routerProgramacion.use(express.json());

// -- PROGRAMACION

routerProgramacion.get('/', (req, res)=> {
  res.send(JSON.stringify(programacion));
});
    
// ** FILTRAR POR LENGUAJE
routerProgramacion.get('/:lenguaje', (req, res)=> {
  const lenguaje = req.params.lenguaje;
  const resultados = programacion.filter(curso=> curso.lenguaje === lenguaje);
    
  if(resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }
  
// ** INICIO PARAMETROS QUERY **
  if(req.query.ordenar === 'vistas') {
    return res.send(JSON.stringify(resultados.sort((a, b)=> a.vistas - b.vistas)));
  }
// ** END PARAMETROS QUERY **
  
  res.send(JSON.stringify(resultados));
});
  
// ** END LENGUAJE
  
// ** FILTRAR POR LENGUAJE Y NIVEL:
  
routerProgramacion.get('/:lenguaje/:nivel', (req, res)=> {
  // extracción de datos por la URL
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  
  // EVALUACION
  const resultados = programacion.filter(curso=> curso.lenguaje === lenguaje && curso.nivel === nivel);
  
  // validacion de resultado
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos para el lenguaje ${lenguaje} con el nivel ${nivel}`);
  }
  
  res.send(JSON.stringify(resultados));
})
  
// ** END LENGUAJE Y NIVEL

// ******** STARTS POST ******

routerProgramacion.post('/', (req, res)=> {
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.send(JSON.stringify(programacion));
});

// ++ Tomando en cuenta que no se puede realizar ahorita, vamos a simularla con la extensión que se ha estado utilizando (REST CLIENT), por lo que solo debemos crear un archivo llamado index.http y de esta manera podremos simularlo con la extensión
// En la realidad estas peticiones se harían del lado del cliente, por ejemplo en REACT usando fetch, pero por el momento solo nos estamos centrando del lado del servidor

// ********* ENDS POST *******

// ********* STARTS PUT *******

// PUT permite actualizar una entidad, es decir actualiza a un cliente, un producto, etc.; con PUT se tienen que enviar todas las propiedades del objeto y solo las diferentes serán modificadas

routerProgramacion.put('/:id', (req, res)=> {
  const cursoActualizado = req.body;
  const id = req.params.id;

  // findIndex se encarga de encontrar el índice en las propiedades, así mismo no se usa la igualdad estricta ===, debido a que el id que tenemos almacenado en nuestra base de datos si es un número, sin embargo el que nosotros recibiremos será cadena de caracteres ya que sería el que se encargó de escribir el cliente
  const indice = programacion.findIndex(curso=> curso.id == id);

  if(indice >= 0) {
    programacion[indice] = cursoActualizado;
  }
  res.send(JSON.stringify(programacion));
});

// ********* ENDS PUT *******

// ******** STARTS PATCH ******
// Con PATCH a diferencia de PUT, es que no tienes que colocar todas las propiedades del objeto mientras que con PUT si se tienen que colocar todas
// AL FINAL SE PUEDE DECIR QUE PUT ES MÁS USADO CUANDO LA ENTIDAD ES MODIFICADA COMPLETAMENTE, MANEJA UNA ESTRUCTURA MÁS CLARA PARA TENER CONTROL DE LO QUE SE ESTÁ MODIFICANDO Y A SU VEZ ES AMPLIAMENTE SOPORTADO POR TODOS LOS SITEMAS
// MIENTRAS QUE PATCH ES MÁS USADO CUANDO SON MODIFICACIONES FRECUENTES O PEQUEÑAS, EN DONDE SE MINIMIZA LA CANTIDAD DE DATROS A TRANSFERIR, DE IGUAL MANERA UNICAMENTE MODIFICA LO INDICADO REDUCIENDO ASÍ QUE SE MODIFIQUEN DATOS NO DESEADOS YA QUE CON PUT LA PRBABILIDAD DE MOFICAR COSAS "SIN QUERER" ES MAYOR, PERO A SU VEZ PATCH NO ES SOPORTADO POR TODOS LOS SITEMAS

routerProgramacion.patch('/:id', (req, res)=> {
  const infoActualizada = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex(curso=> curso.id == id);

  if(indice >= 0) {
    const cursoAModificar = programacion[indice];
    Object.assign(cursoAModificar, infoActualizada);
  }
  res.send(JSON.stringify(programacion));
});

// ******** ENDS PATCH *******

// ******* STARTS DELETE *****

routerProgramacion.delete('/:id', (req, res)=> {
  // Para este caso como delete no necesita un cuerpo, no se trabajará con el cuerpo de la solicitud, pero si es importante manejar lo que sería el id
  const id = req.params.id;

  const indice = programacion.findIndex(curso=> curso.id == id);

  if(indice >= 0) {
    // la siguiente linea utiliza splice, lo que indica que se eliminará del array programacion algunos valores, para este caso el parámetro indice indica desde donde empieza a contar y el siguiente parámetro, osea el 1 indica la cantidad de elementos a eliminar
    programacion.splice(indice, 1);
  }
  res.send(JSON.stringify(programacion));
});

// ******* ENDS DELETE ******
  
// -- END PROGRAMACION

module.exports = routerProgramacion;