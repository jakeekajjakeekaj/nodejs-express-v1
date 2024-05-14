// PRIMER SERVIDOR CON NODE.JS GRACIAS AL MÓDULO HTTP

// El módulo http, le permite a Node.js transmitir información con el protocolo HTTP.
// El módulo http nos permite escribir un servidor que escuche las solicitudes.

// Cuando tenemos un servidor, necesitamos que dicho servidor "escuche" a las solicitudes, por lo que se tiene que definir un puerto, un PUERTO ES UNA UBICACIÓN VIRTUAL del sistema operativo en la cual se puede acceder a una aplicación o a un proceso específico que se esté ejecutanfo en ese puerto.
// Para este caso estaremos trabajando con el puerto 3000

const http = require('http');

// Los parámetros son req (request) y res (response)
// req: Contiene la solicitud HTTP
// res: Representa la respuesta HTTP que se enviará al cliente
const servidor = http.createServer((req, res)=> {
  // Con el método end, se enviará la respuesta final hacia el cliente
  res.end("Hola Mundo");
});

// De esta manera le empezamos a decir al servidor que tiene que comenzar a escuchar las solicitudes con listen y a su vez le decimos lo que tiene que hacer al comenzar a escuchar dichas solicitudes
servidor.listen(3000, ()=> {
  console.log("El servidor esta escuchando");
});

// De esta manera hemos podido arrancar al servidor, lo único que se tiene que hacer es en el navegador acceder al localhost:3000 y aquí mismo en el editor, en la consola ejecutar el node app.js y de esta manera en consola nos aparece el mensaje "El servidor esta escuchando" y en el navegador ya nos aparece nuestro "Hola Mundo"