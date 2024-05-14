// ASYNC AWAIT, try catch

// Teniendo en cuenta el caso del ejemplo R, vamos a trabajar lo mismo, pero esta vez con async await

const ordenarProducto = (producto)=> {
  return new Promise((resolve, reject)=> {
    console.log(`Ordenando: ${producto} de jakeekaj`);
    setTimeout(()=> {
      if(producto === 'taza') {
        resolve("Taza agregada correctamente");
      } else {
        reject("Producto no disponible :/");
      }
    }, 2000);
  });
}

const procesarPedido = (respuesta)=> {
  // Para este caso se omite el reject ya que no se usará en esta función
  return new Promise((resolve)=> {
    console.log("Procesando Respuesta...");
    console.log(`La respuesta fue: "${respuesta}"`);
    setTimeout(()=> {
      resolve("Gracias por su Compra!");
    }, 4000);
  })
}

// CON ASYNC AWAIT PODEMOS ESCRIBIR CÓDIGO ASÍNCRONO, COMO SI FUERA CÓDIGO SÍNCRONO

// nosotros al escribir async le dice a JS que la función tendrá códgio asíncrono, es decir que se trabajará con promesas y es el primer paso a realizar para el código asíncrono con async await
const realizarPedido = async (producto)=> {
  // try catch es bastante utilizado también, con el try estamos indicando que se intentará realizar cierta acción y en caso de que esta acción no sea completada, manejamos el catch para determinar cómo manejaremos al error
  try {
    // await lo que indica es que hasta que el proceso asíncrono ordenarProducto se complete, la función no se seguirá ejecutando, una vez que finalice ahora si continuará el proceso SIEMPRE SE USA DESPUÉS DEL ASYNC
    const respuesta = await ordenarProducto(producto);
    console.log("Respuesta Recibida");
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (error) {
    console.log(error);
  }
}

realizarPedido('taza');