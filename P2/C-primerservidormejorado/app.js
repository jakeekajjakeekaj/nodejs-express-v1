// PRIMER SERVIDOR CON NODE.JS GRACIAS AL MÓDULO HTTP MEJORADO

// Como tal la única mejora es que se declaró la contante puerto, es una buena práctica declarar el puerto como una constante y luego utilizar la constante dentro del .listen

const http = require('http');
const puerto = 3000;

const servidor = http.createServer((req, res)=> {
  res.end("Hola Mundo");
});

servidor.listen(puerto, ()=> {
  console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
});