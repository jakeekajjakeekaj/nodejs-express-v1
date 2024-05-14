// Suponiendo que se tiene una tienda de pizzas, y nuestros pedidos son en forma asíncrona, es decir que puede tomar un tiempo realizar el pedido, así como pueden saltar errores como de red o ese tipo de situaciones (Fallando como al 20% de veces).

// Simulando la aleatoriedad de los estados para pedido correcto y pedido incorrecto
const statusPedido = ()=> {
  // Math.random determina un valor aleatorio entre 0 - 1, por lo que estamos indicando que tiene que ser un valor menor a 0.8
  return Math.random() < 0.8;
};

// Se define la promesa
const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(()=> {
    if (statusPedido()) {
      resolve("Pedido Exitoso, ¡La Pizza se Encuentra en Camino!");
    } else {
      reject("Ocurrió un Error :/. Por Favor Vuelva a Intentarlo.");
    }
  }, 3000);
});

// Se define a la función que manejará la solución, pasando como parámetro al mensaje
// const manejarPedido = (mensajeDeConfirmacion)=> {
//   console.log(mensajeDeConfirmacion);
// };

// Se defina a la función que manejará el rechazo, pasando como parámetro al mensaje
// const rechazarPedido = (mensajeDeError)=> {
//   console.log(mensajeDeError);
// };

// con el .then definimos las funciones encargadas de cada cosa, en los parámetros la primer función será la que maneje la solución mientras que la otra menejará el rechazo
// miPedidoDePizza.then(manejarPedido, rechazarPedido);


// ** EXISTE OTRA MANERA DE DECLARAR LO DE ARRIBA EN UN SOLO BLOQUE DE CÓDIGO (es decir manejarPedido, rechazarPedido y el .then):

miPedidoDePizza
  .then((mensajeDeConfirmacion)=> {
    console.log(mensajeDeConfirmacion);
  })
  // Aquí se define el null, ya que no queremos definir el éxito nuevamente, sino que ahora queremos definir el rechazo, entonces indicamos que no habrá nada para el éxito y ya solo definimos para el rechazo manejando así la misma lógica el .then largo
  .then(null, (mensajeDeError)=> {
    console.log(mensajeDeError);
  });

// Otra manera de manejarlo, en vez de utilizar el null, es el catch, pero eso se verá en el punto Q de la sección de ejercicios