// MODELO CLIENTE-SERVIDOR

// El modelo cliente servidor es usado para acceder a internet y obtener recursos e información

// El cliente se puede definir como el navegador que realiza solicitudes a un servidor
// Un servidor es un PROGRAMA que se ejecuta en un servidor físico paea ofrecer un servicio al cliente

// Cada uno envía los mensajes en un formato diferente, sin embargo estos consiguen entenderse, esto es porque el servidor conoce el formato esperado del mensaje que envía el cliente y el cliente conoce el formato esperado del mensaje que recibe del servidor. EL PROTOCOLO HTTP ES EL QUE DEFINE EL FORMATO DE LOS MENSAJES.

// Un protocolo es un conjunto de reglas que permiten transmitir información entre dispositivos de una red

// Las solicitudes HTTP vienen siendo las request, estos serían los métodos http (para actualizar, agregar, eliminar), camino (también conocido como path es el que indica la dirección en donde se encuentra el recurso), versión de http, cabeceras (también conocidas como headers, y proveen mayor información para el servidor) y para finalizar el cuerpo (body, si se necesita enviar alguna información al servidor, por ejemplo si se quiere crear un usuario nuevo)

// Si nosotros accedemos a una página, la inspeccionamos y nos dirigimos en NETWORK, podemos observar todos los archivos de la página, si seleccionamos alguno podemos observar por ejemplo la dirección del archivo, así como el método de request


// -- METODOS HTTP --

// Entre los más comunes se encuentra GET, POST, PUT, DELETE, OTROS...

// RESPIESTAS HTTP
// Las respuestas tienen código de estado, texto de estado, versión http y puede incluir cabeceras (headers) y cuerpo (body)

// LOS CÓDIGOS DE ESTADO HTTP SE DISTRUBUYEN COMO:
/* 
    - RESPUESTAS INFORMATIVAS (100 - 199)
    - RESPUESTAS SATISFACTORIAS (200 - 299)
    - REDIRECCIONES (300 - 399)
    - ERRORES DE LOS CLIENTES (400 - 499)
    - ERRORES DE LOS SERVIDORES (500 - 599)
*/
// DE IGUAL MANERA EXISTEN CÓDIGOS YA PREDEFINIDOS, VERIFICARLOS EN MDN DOCS POR EJEMPLO
// LOS CODIGOS MAS COMUNES SON:
/* 
    - 200 OK
    - 400 Bad Request, el servidor no pudo interpretar la solicitud
    - 404 Not Found, el servdior no pudo encontrar el recurso solicitado
    - 500 Internal Server Erro, el servidor encontró una situación que no sabe cómo manejar
*/