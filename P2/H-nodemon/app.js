// NODEMON PARA NODE.JS

// Nodemon es una herramienta que reinicia la aplicación de Node.js cuando detecta algún cambio.

// Para su instalación se usa: npm install -g nodemon
// ** CABE RECALCAR QUE EL -g ES LA ETIQUETA PARA INSTALARLO DE FORMA GLOBAL

// Para ejecutar la aplicación en vez de escribir node app.js por ejemplo, se escribiría nodemon app.js

// Una vez instalado NODEMON, se realiza una prueba:

const http = require('http');

const servidor = http.createServer((req, res)=> {
    res.end("Hola Mundos");
});

const PUERTO = 3000;

servidor.listen(PUERTO, ()=> {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});

// *** DATO EXTRA: ANTES SE TENÍA QUE EJECUTAR EL COMANDO Set-ExecutionPolicy RemoteSigned -Scope CurrentUser, pero YA NO ES NECESARIO HACER ESO, BASTA CON ABRIR LA TERMINAL DE COMMAND PROMPT EN VEZ DE LA PWERSHELL, DE ESTA MANERA YA NO HABRÁN PROBLEMAS

// Ahora ya podemos ejecutar nodemon app.js y de esta manera cada cambio que se realice se actualizará, es así como en la página sol será necesario actualizar para reflejar los cambios