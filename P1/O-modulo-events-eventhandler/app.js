// MÓDULO EVENTS

// Se agrega la clase
const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', ()=> {
    console.log("Se realizó una compra.");
});

emisorProductos.on('compraPersonalizada', (total)=> {
    console.log(`Se realizó una compra personalizada por ${total}`);
});

emisorProductos.emit('compra');
emisorProductos.emit('compraPersonalizada', 500);

// En poicas palabras, lo que ocurrió fue que se creó a una clase llamada emisorProductos usando los valores de la clase EventEmitter, una vez realizado esto, se determina una acción que se tomará en caso de algún tipo de evento, para esto es utilizado el .on; y para finalizar simulamos este llamado, esto se realiza con el emisorProductos.emit, ahora lo único que falta es que tenemos que nombrar al tipo de evento para que dependiendo lo que ocurra, se tome la acción, para este caso se emite la 'compra' y en el on se toma acción sobre la 'compra', la misma lógica para 'compraPersonalizada'

// En general a las funciones que manejan eventos cuando ocurren se les denomina Event Handlers, osea que son funciones que están asociadas al evento, y cuando ocurren se ejecutan, osea que vendría siendo lo que está dentro del .on