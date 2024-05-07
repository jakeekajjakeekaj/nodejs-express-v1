// Si nosotros no queremos todos los elementos de un módulo, sino que únicamente queremos ciertas cosas de este módulo, lo que se hace es:
// Para empezar se usa la sintaxis de desestructuración, en la cual se coloca entre llaves el nombre de la propiedad
const { saludarHolaMundo } = require('./saludos.js');

// **COMO DATO INTERESANTE, SUPONIENDO QUE QUEREMOS METER MÁS PROPIEDADES DEL MÓDULO, PUES BASTARÍA CON ESCRIBIR
// const { saludar, saludarHolaMundo } = require('./saludos.js');
// Y de esta manera estamos incluyendo ambas propiedades

// Así mismo gracias a la sintaxis de desestructuración, ya no se tiene que mencionar el nombre del objeto con su propiedad, basta con únicamente dar el nombre

console.log(saludarHolaMundo());

// De esta manera a pesar de que en el módulo saludos se están exportando 2 propiedades, aquí únicamente estamos incluyendo una propiedad del módulo y es la que se está utilizando