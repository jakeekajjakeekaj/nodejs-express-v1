const express = require('express');

const {programacion} = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router();

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
  
// ****** INICIO PARAMETROS QUERY *******
  if(req.query.ordenar === 'vistas') {
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
  const resultados = programacion.filter(curso=> curso.lenguaje === lenguaje && curso.nivel === nivel);
  
  // validacion de resultado
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos para el lenguaje ${lenguaje} con el nivel ${nivel}`);
  }
  
  res.send(JSON.stringify(resultados));
})
  
// ** END LENGUAJE Y NIVEL
  
// -- END PROGRAMACION

module.exports = routerProgramacion;