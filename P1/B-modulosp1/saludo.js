function saludar(nombre) {
    return `Hola ${nombre}`;
}

// module.exports es un objeto, es decir que si nosotros escribimos console.log(module.exports), la respuesta será {}; ya que sería un objeto vacío, así mismo recordemos que la notación para los objetos es con los puntos, por lo que para este caso indicamos que el module.exports.saludar tendrá el nombre de saludar (el nombre es independiente, si nosotros queremos podemos ponerle como nombre equis de y se tendrá el mismo resultado, aunque lo recomendable es usar el mismo nombre), y esta propiedad será igual al valor de la función saludar.
module.exports.saludar = saludar;

// Posterior a esto, si decidimos escribir de nuevo console.log(module.exports), ahora sí ya no sale un objeto vacío, sale un objeto que contiene a una función y se encuentra listo para ser exportado, únicamente tiene que ser incluido en algún otro lado, para este caso la app.js