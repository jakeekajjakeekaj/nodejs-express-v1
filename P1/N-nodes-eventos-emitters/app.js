// EVENTOS NODE.JS

// Un evento es una accion que se realiza en una aplicación, NODE está basado en eventos asíncronos, dentro de NODE podemos trabajar específicamente con estos eventos asíncronos

// Emitters (emisores): Son objetos que emiten eventos nombrados y llaman a funciones específicas cuando ocurren.
// Los emisores son instancias de la clase EventEmitter, estos objetos tienen un método .on() para asociar una función al evento. Es decir que al saber el nombre del evento, en cuanto este mismo evento ocurra, el servidor sabrá cómo reaccionar, así esta fucnión se ejecuta cuando ocurre el evento y las funciones que manejan eventos, suelen tener el nombre de "Event Handler" o también "Event Listener".

// Para poder crear y definir nuestros porpios eventos, en Node tenemos el módulo EVENTS, este módulo permite definir, emitir y escuchar eventos para saber cuándo ocurren, al emitirlos se indica que nosotros mismos podemos crear o generar estos eventos, mientras que al definirlos indicamos los procesos que ocurrirán cuando el evento se ejecute.

// EJEMPLO:
// Para este caso se puede observar que para empezar, la sintaxis del const es acorde a la sintaxis de una clase, es por esto que no inicia con minpuscula, a su vez observamos que es nombrada EventEmitter en vez del mismo nombre (events), del require, esto es porque este módulo nos estaría retornando una clase, es por esto que no se está respetando dicha regla
const EventEmitter = require('events');

// Al imprimir esta clase, tenemos distintos métodos que podemos utiilizar, un ejemplo sería el método on
console.log(EventEmitter);