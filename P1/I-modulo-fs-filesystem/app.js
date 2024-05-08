// MÓDULO FS
// Vendría siendo un módulo File System, contine funcionalidad para trabajar con el sistema de archivos.

/* Las operaciones útiles respecto a los archivos serían:
    - Leer
    - Modificar
    - Copiar
    - Eliminar
    - Cambiar Nombre
*/

// Todos los métodos de este módulo son asíncronos por defecto, sin embargo si no queremos que sean asíncronas, podemos definirlas como síncronas agregando Sync a sus nombres.
// Un ejemplo de esto es:

// - fs.rename(); : Si nos damos cuenta, en este caso estamos utilizando el módulo fs para renombrar un archivo y que por defecto es asíncrono el proceso.

// - fs.renameSync(); : Para este caso es lo mismo que el ejemplo de arriba, solo que esta vez lo hemos convertido a un proceso síncrono


// -- EJEMPLO fs readFile --

// const fs = require('fs');

// Para el primer parámetro indicamos el archivo a leer, después cómo se van a codificar los caracteres, que sería con 'utf-8', finalizando en que debido a que los métodos son asíncronos, indicamos la acción a tomar cuando se termine el proceso, para este caso le estamos dicienod que nos muestre si hubo un error o que nos muestre el contenido
// fs.readFile("index.html", "utf-8", (err, contenido)=> {
//   if(err) {
//     console.log(err);
    // throw err; Este srive para detener el programa y comentar el error ocurrido
//   } else {
//     console.log(contenido);
//   }
// });

// De esta manera en nuestra consola nos aparecerá todo el contenido de index.html


// -- EJEMPLO fs RENAME --

// const fs = require('fs');

// fs.rename('index.html', 'main.html', (err)=> {
//   if(err) {
//     throw err;
//   }
//   console.log("Nombre cambiado exitosamente a main");
// })

// fs.rename('main.html', 'index.html', (err)=> {
//   if(err) {
//     throw err;
//   }
//   console.log("Nombre regresado a index exitosamente");
// })


// -- EJEMPLO AGREGAR CONTENIDO AL FINAL

// const fs = require('fs');

// fs.appendFile('index.html', '<p>Contenido nuevo</p>', (err)=> {
//   if(err) {
//     throw err;
//   }
//   console.log('Archivo Actualizado');
// });


// -- EJEMPLO PARA REEMPLAZAR TODO EL CONTENIDO DEL ARCHIVO

// const fs = require("fs");

// fs.writeFile('index2.html', "Contenido Nuevo", (err)=> {
//   if (err) {
//     throw err;
//   }
//   console.log("Contenido reemplazado exitosamente");
// });
// De esta manera se reemplazó todo por el mensaje indicado


// -- EJEMPLO PARA ELIMINAR TODO UN ARCHIVO

// const fs = require('fs');

// fs.unlink('index3.html', (err)=> {
//   if(err) {
//     throw err;
//   }
//   console.log("Archivo Eliminado Exitosamente");
// });
// De esta manera eliminamos todo un archivo, en este caso el index3.html