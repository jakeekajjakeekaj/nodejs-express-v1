// PROMESAS EN JAVA SCRIPT
// Una promesa es un objeto que representa el eventual resultado (o error) de una operación asíncrona
// Cuando nosotros realizamos una petición web hacia nuestro servidor, se suele trabajar con promesas, porque no sabemos cuánto tiempo le tomará al servidor realizar dicha acción, un ejemplo también es que dependiendo de la conexión a internet la velocidad de respuesta va a cambiar, eso no lo podemos controlar nosotros y es por eso que usamos a las promesas.

// La promesa se crea, una vez esto entra en estado pending (pendiente), y una vez transcurrido el tiempo, el estado cambia a fulfilled (cumplida) o rejected (rechazada).
// Una promesa es un objeto de JS que representará el resultado o error al ejecutarse dicha promesa, este objeto es asociado a una callback function, el cual es una función que se ejecuta cuando se completa dicho proceso asíncrono para procesar el resultado.

// CALLBACK FUNCTION, la cual no es un término técnico, pero se podría decir que esuna función de respuesta, la cual se llamará cuando se complete el proceso.
// Se define como una función que se pasa a otra función como argumento y luego se ejecuta dentro de la función externa.

// Las promesas tienen un método .then(), con el cual se puede decir qué ocurre cuando se completa la promesa (éxito o error).


// EJEMPLO

// Únicamente para este ejemplo se creará la constante de abajo para tener un valor de true forzado
const promesaCumplida = true;

// Se define una constante con una igualación a una Promise, en donde indicamos que tendrán resolve y reject, y de esta manera dentro declaramos el mensaje para el caso de resolve y el mensaje para el caso de reject
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(()=> {
        if (promesaCumplida) {
            resolve("Promesa Cumplida!");
        } else {
            reject("Promesa Rechazada...");
        }
    }, 3000);
});

// Utilizamos .then para así determinar lo que se realizará una vez finalizado el proceso, en el cual obtenemos el valor con cualquier nombre de variable y así trabajamos con el, para este caso lo imprimimos
miPromesa.then((valorxd)=> {
    console.log(valorxd);   //Promesa Cumplida!
})

// ***CABE RESALTAR QUE ESTE SERÍA EL PROCESO PARA CUANDO LA PROMESA ES CUMPLIDA, PARA EL CASO EN EL QUE ES RECHAZADA, EL PROCESO SERÍA DIFERENTE YA QUE DE LO CONTRARIO DARÍA ERROR, EL PROCESO AHORA SERÍA:

const promesaRechazada = false;

const miPromesa2 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        if (promesaRechazada) {
            resolve("Promesa2 Cumplida!");
        } else {
            reject("Promesa2 Rechazada...");
        }
    }, 3000);
});

// Definimos el comportamiento que se tendrá en caso de que se haya aceptado la promesa
const manejarPromesaCumplida = (valor)=> {
    console.log(valor);
};

// Definimos el comportamiento que se tendrá en caso de que se haya rechazado la promesa
const manejarPromesaRechazada = (razonRechazo)=> {
    console.log(razonRechazo);
};

// De esta manera ya usamos el .then y tomará una u otra dependiendo de si fue aceptada o rechazada la promesa
miPromesa2.then(manejarPromesaCumplida, manejarPromesaRechazada);