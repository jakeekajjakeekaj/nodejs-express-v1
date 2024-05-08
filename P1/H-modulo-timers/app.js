// MÓDULO TIMERS
// Este módulo sirve para trabajar con operaciones asíncronas, es decir que ejecutan un código luego de cierto periodo de tiempo.
/* Algunas funciones bastante útiles son:

    - setTimeout(); : Función para ejecutar código después de un número específico de milisegundos

    - setImmediate(); : Se ejecuta después el código síncrono, es decir que el código síncrono tiene prioridad y una vez que acabe, inmeditamente se ejecuta esta función.

    - setInterval(); : Para ejecutar un número infinitas veces con un retraso específico de milisegundos
*/

// -- EJEMPLO setTimeout() --
// let saludo = (nombre)=> {
//     console.log(`Hola ${nombre}`);
// }

// setTimeout(saludo, 5000, "Mundo");

// EJEMPLO 2 setTimeout
// let sumar = (a, b) => {
//     console.log(a + b);
// }

// setTimeout(sumar, 2000, 5, 6);


// -- EJEMPLO setImmediate() --
// let mostrarTema = (tema) => {
//   console.log(`Estoy aprendiendo ${tema}`);
// }

// setImmediate(mostrarTema, "Node.js");

// console.log("Este mensaje se imprimirá primero a pesar de estar después :O");

// -- EJEMPLO setInterval() --
// let mostrarTema = (MostrarTema)=> {
//   console.log(`Estoy aprendiendo ${MostrarTema}`);
// }

// setInterval(mostrarTema, 1500, "Node.js");