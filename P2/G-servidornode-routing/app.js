// Routing en Node.js

// Routing significa manejar las solicitudes del cliente con base en ciertos cirterios, el objetivo sería crear varias rutas oara así decirle al servidor lo que se necesita hacer.

// Los criterios son EL MÉTODO DE LA SOLICITUD HTTP. De esta forma el servidor sabe qué tipo de operación se realizará.
// EL PATH DE LA SOLICITUD HTTP. De esta forma el servidor sabe el recurso específico que se usará.

// Por lo que en general se puede decir que una ruta vendría teniendo la estructura de MÉTODO + PATH + CÓMO MANEJARLO

// Pero entonces cómo se aplica el distinto funcionamiento a diferentes rutas?

// Cabe resaltar que ahorita se realizará algo básico con NODE.JS, pero posteriormente se verá que es mejor y aparte las distintas ventajas de manejarlo con Express

const http = require('http');
const cursos = require('./cursos');

const servidor = http.createServer((req, res)=> {
  const {method} = req;

  switch(method) {
    case 'GET':
      return manejarSolicitudGET(req, res);
    case 'POST':
      return manejarSolicitudPOST(req, res);
    default:
      res.statusCode = 501;
      console.log(`El metodo usado no puede ser manejado por el servidor: ${method}`);
  }
});

const manejarSolicitudGET = (req, res)=> {
  const path = req.url;
  // La condición de abajo evalúa si estamos en la página principal
  if(path === '/') {
    // *** ES IMPORTANTE MENCIONAR QUE AQUÍ SE COLOCÓ EL STATUS CODE 200 DE MANERA EXPLÍCITA, PERO ESTO NO ES NECESARIO REALMENTE, YA QUE ES EL ÚNICO QUE SE PONE POR PREDETERMINADO, PARA TODOS LOS DEMÁS SI ES NECESARIO COLOCAR LOS DEMÁS CÓDIGOS
    res.statusCode = 200;
    return res.end("Bienvenidos a mi primer servidor y API creados con Node.js");
  } else if (path === '/cursos') {
    res.statusCode = 200;
    // trasnformando a una cadena de caracteres con formato json el contenido de cursos.js
    return res.end(JSON.stringify(cursos.infoCursos));
  } else if (path === '/cursos/programacion') {
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos.programacion));
  } else if (path === '/cursos/matematicas') {
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos.matematicas));
  }
  res.statusCode = 404;
  res.end("El recurso solicitado no existe...");
}

const manejarSolicitudPOST = (req, res)=> {
  const path = req.url;
  if(path === '/cursos/programacion') {
    res.statusCode = 200;
    return res.end("El servidor recibio una solicitud POST para /cursos/programacion");
    // Para prbar estos casos, con ayuda de la extensión se creará un archivo index.http para simular un mpetodo POST
  }
}

const PUERTO = 3000;

servidor.listen(PUERTO, ()=> {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});

// --- DE ESTA MANERA ES UN VISTAZO RÁPIDO DE LO QUE SE PUEDE HACER ÚNICAMENTE CON NODE.JS, EXISTEN VARIAS COSAS MÁS, SIN EMBARGO COMO SE PUEDE VER, PARA COSAS NO TAN COMPLEJAS, SE PUEDE IR HACIENDO ALGO COMPLICADO EL CÓDIGO, UNA VEZ QUE SE EMPIECE A USAR EXPRESS.JS ESTAS TAREAS SE FACILITARÁN