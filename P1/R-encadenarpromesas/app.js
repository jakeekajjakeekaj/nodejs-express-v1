// ENCADENAR PROMESAS, ASYNC AWAIT

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

// Ya tenemos declaradas las 2 funciones que contienen promesas, sin embargo justamente ambas son asíncronas, el orden que deben de llevar es ordenarProduct para después procesarPedido, pero si son asíncronas ¿Cómo se respetará que primro se ejecute una función y al finalizar se ejecute la otra? la solución se encuentra abajo:

ordenarProducto("taza")
  .then((respuesta)=> {
    console.log("Respuesta Recibida");
    console.log(respuesta);
    // De esta manera estamos declarando a la función asíncrona procesarPedido dentro de la función ordenarProducto con un return, así ahora si lleva un orden de ejecución y a su vez le estamos pasando el parámetro de la respuesta
    return procesarPedido(respuesta);
  })
  // De esta manera ya estamos haciendo una cadena de promesas, generalmente en este punto ya se colocaría un .catch por ejemplo para manejar lo que sería la promesa rechazada, sin embargo al declarar nuevamente el .then estamos accediendo a la promesa pero de procesarPedido
  .then((respuestaProcesada)=> {
    console.log(respuestaProcesada);
  })
  .catch((error)=> {
    console.log(error);
  });

// Gracias a esto, podemos determinar el orden de ejecución pese a usar funciones asíncronas

// Si nosotros queremos tener un código con muchas promesas, y que estas estén enlazadas entre sí, deberiamos usar muchas veces el .then, situación que podría llegar a provoca cierta complejidad en la codificación y legibilidad del código, es por esto que se tiene async await, esta funcionalidad se verá en la sección S