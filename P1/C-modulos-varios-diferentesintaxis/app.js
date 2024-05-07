// Basta con iniciar el require una vez aunque se exporten varias cosas en el módulo, esto es porque al final no para de ser un objeto y lo único que hacemos al incuir varias cosas, es aumentar las propiedades que tendrá nuestro obujeto, pero podremos seguirlas llamando a nuestro gusto
const saludos = require("./saludos.js");

console.log(saludos.saludar("Jakeekaj"));
console.log(saludos.saludarHolaMundo());