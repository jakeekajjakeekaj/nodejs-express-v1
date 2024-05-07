function saludar(nombre) {
    return `Hola ${nombre}`;
}

function saludarHolaMundo() {
    return "¡Hola Mundo!";
}

// De esta manera hemos conseguido exportar 2 propiedades que realizan diferentes cosas
// module.exports.saludar = saludar;
// module.exports.saludarHolaMundo = saludarHolaMundo;

// Otra manera de hacer lo mismo de arriba, pero escrito de otra forma, la cual algunas personas suelen usar o preferir es:

module.exports = {
    saludar : saludar,
    saludarHolaMundo : saludarHolaMundo
};

// Aquí al final el module.exports como ya se mencionó es un objeto, por lo tanto estamos indicando lo mismo de arriba pero con diferente organización