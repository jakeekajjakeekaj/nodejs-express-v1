// req y res

const http = require('http');

const servidor = http.createServer((req, res)=> {
  // console.log('===> req (solicitud)');
  // A continuación se imprime en consola todo el objeto, si queremos algo más espeífico podemos escribir por ejemplo req.url o algo por el estilo
  // console.log(req);
  // Ahora en vez de probar el req, probaremos el res
  console.log('===> res (respuesta)');
  console.log(res);
  // De esta manera así como con el req, nos aparecen todas las posibilidades que se pueden tener con res
  res.end("Hola Mundo");
});

const puerto = 3000;

servidor.listen(3000, ()=> {
  console.log(`El servidor está escuchando en el puerto ${puerto}...`);
});

// *** PARA SIMULAR CUALQUIER TIPO DE MÉTODO HTTP, SE USÓ UNA EXTENSIÓN LLAMADA REST CLIENT, DE ESTA MANERA NOSOTROS CREAMOS UN DOCUMENTO LLAMADO index.http Y DENTRO ESCRIBIMOS EL MÉTODO, POR EJEMPLO POST Y LA URL, ES DECIR localhost:3000, para que quede así: POST http:/localhost:3000/ Y DE ESTA MANERA NOS SALDRÁ UNA ETIQUETA GRACIAS A LA EXTENSIÓN EN DONDE SI LE PONEMOS EN send request, YA SE ESTARÍA COMPLETANDO LA REQUEST, Y LO PODEMOS COMPROBAR HACIENDO USO DEL req.method ***

// Hasta aquí lo que se imprime en consola son bastantes propiedades con las que se puede trabajar, para este caso las más importantes serían:
// PARA REQUEST
/* 
  req.url Da el camino que escribimos luego de la página, es decir localhost:3000/micurso/cursos, pues se estaría extrayendo /micurso/cursos

  req.method Da el método de la petición, get, post, put, delete

  req.headers De esta manera podemos visualizar los headers
*/

// PARA RESPONSE
/* 
  res.statusCode Arroja el código de estado, si nosotros quisiéramos también podemos cambiar el código de estado si nosotros escribimos res.statusCode = 404; de esta manera lo hemos podido cambiar

  res.setHeader('content-type', 'application/json'); De esta manera indicamos el header que se tendrá y a su vez indicamos que el contenido
*/