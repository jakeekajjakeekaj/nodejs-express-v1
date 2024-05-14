// CATCH

// .catch() es un método de promesa que solo se ejecuta si la promesa es rechazada, ejemplo:

// Anteriormente la sintaxis para manejar promesas rechazadas era:
// .then(null, (mensajeDeError)=> {
//     console.log(mensajeDeError);
// });

// Ahora gracias al .catch sería:
// .catch((mensajeDeError)=> {
//     console.log(mensajeDeError);
// });

// Como se puede ver, la única diferencia a nivel sintaxis, es que ya no se declara el null, y ahora en vez de escribir .thenm se escribe .catch