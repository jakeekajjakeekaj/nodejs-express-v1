// INTRODUCCION A JSON

// Significa JavaScript Object Notation, y es un formato de texto usado para almacenar y transportar información, incluso configuraciones como por ejemplo al crear nuestro npm, la información se almacenó en un .json
// Como ya se mencionó, JS NO es un lenguaje de programación, sino que es un formato de texto, sin embargo dice JavaScript en su nombre debido a que si está basado en la notación de objetos de JS, pero solo eso.
// Otro plus es que permite almacenas objetos de JS como texto, es por esto que se usa bastante para las transferencias de cliente servidor, ya que permite convertir los objetos a texto y que así se consiga una correcta comunicación.

// EJEMPLO:
// Hemos creado un archivo .json llamado prueba.json, de esta manera hemos dentro del archivo creado el texto correspondiente a lo que sería el fomrato json.

// Para trabajar con el contenido de nuestro JSON, tenemos la opción de incluirlo con require, ya que normalmente estariamos recibiendo esa información desde un servidor, pero como todavía no estamos trabajando con servidores, se realizará esta tarea de forma local:
// const curso = require('./prueba.json');

// Si nosotros imprimimos en consola a la contante curso, nos arrojará en la consola todo nuestro json
// console.log(curso);

// A su vez tenemos que tener presente que en cuanto nosotros obtenemos la información de nuestro json, nosotros no conservamos esto como un json, se convierte a un objeto de JS, se comprueba de la siguiente manera:
// console.log(typeof curso);  // Object

// Tomando en cuenta que se transforma a un objeto de JS, nosotros podemos acceder al contenido del JSON como con cualquier otro objeto, para este caso si se quiere acceder únicamente al titulo lo que se haría es:
// console.log(curso.titulo);   //OLAAAAA XD


// -- SUPONGAMOS QUE AHORA QUEREMOS HACER LO CONTRARIO, EN VEZ DE OBTENER LA INFORMACIÓN DESDE UN JSON, QUEREMOS PASAR LA INFORMACIÓN DE NUESTRA APLICACIÓN A UN JSON, LO QUE SE HARÍA ES:

// Aquí tenemos un objeto común de JS
let infoCurso = {
    "titulo" : "OLAAAAA XD",
    "numVistas" : 34454,
    "numLikes" : 21234,
    "temas" : [
        "programacion",
        "comedia"
    ],
    "esPublico" : true
}

// Para realizar la conversión, primero tenemos que convertir todo de un objeto a una cadena de caracteres, es por esto que usamos JSON.stringify para realizar esta tarea

// -- Conversión de Objeto a Cadena de Caracteres --
// De esta manera se convierte el objeto a cadena de caracteres **OJO: COMO ES UNA CADENA DE CARACTERES SE PIERDEN TODOS LOS BENEFICIOS QUE SE TENIAN CON EL OBJETO COMO AL TRABAJAR LOS DATOS POR SEPARADO
let infoCursoJSON = JSON.stringify(infoCurso);

// Si imprimimos la información vemos que ya no se imprime como un objeto, sino como una cadena
console.log(infoCursoJSON);

// Si solicitamos el tipo de dato vemos que será un tipo String
console.log(typeof infoCursoJSON);

// SI QUEREMOS REALIZAR LO CONTRARIO, LO QUE SE TIENE QUE HACER ES
// -- Conversión de Cadena de Caracteres a Objeto

// De la siguiente manera se convierte la cadena de caracteres que teniamos a un Objeto nuevamente ** OJO: DE ESTA MANERA VOLVEMOS A TENER LOS BENEFICIOS DE TRABAJAR CON UN OBJETO COMO LO QUE SERÍA LA CONSULTA DE DATOS POR FORMA INDIVIDUAL
let infoCursoObjeto = JSON.parse(infoCursoJSON);

// Se imprime al objeto
console.log(infoCursoObjeto);
// Se imprime el tipo de dato, indicando que es un objeto
console.log(typeof infoCursoObjeto);