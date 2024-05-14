// Ejemplo del PROY A, pero esta vez usando catch

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

miPedidoDePizza
  .then((mensajeDeConfirmacion)=> {
    console.log(mensajeDeConfirmacion);
  })
  .catch((mensajeDeError)=> {
    console.log(mensajeDeError);
  });

// Si quisiéramos manejarlo de manera diferente, es decir más "seccionado", podemos escribir

/* const manejarPedido = (mensajeDeConfirmacion)=> {
  console.log(mesnajeDeConfirmacion);
};

const manejarRechazo = (mensajeDeError)=> {
  console.log(mensajeDeError);
};

// De esta manera como se puede ver, estamos manejando en una linea también el .then y el .catch, solo que ya seccionamos las funciones que realizarán las promesas por separado
miPedidoDePizza.then(manejarPedido).catch(manejarRechazo); */