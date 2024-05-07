// Ahora lo que se tiene que hacer es incluir la función del módulo dentro de nuestra app.js, para esto se crea una constante con el nombre del módulo (esto es opcional, pero por buenas prácticas se suele colocar el nombre del módulo que se está incluyendo), así mismo declaramos la palabra require que nos indica que es requerida cierta acción, y ya dentro colocamos la ruta del módulo, para este caos que queda dentro de la misma carpeta, lo indicamos con un "./", y procedemos a escribir el nombre del módulo.
// ** COMO DATO INTERESANTE, PARA EST TIPO DE CASOS NO SE DICE IMPORTAR, SINO QUE SE DICE INCLUIR, ESTO ES PARA QUE NO EXISTA CONFUSIÓN CON OTRO TIPO DE COSAS QUE INCLUSO SI USAN LA PALABRA RESERVADA import
// Cuando se declara un valor con require, lo que se crea al final es un objeto
const saludo = require("./saludo.js");

// Debido a que es un objeto, primero escribimos el nombre del objeto y después escribimos el nombre de la propiedad
console.log(saludo.saludar("Jakeekaj"));

// DE ESTA MANERA AL EJECUTAR "node app.js", ahora sí se ejecuta bien el código