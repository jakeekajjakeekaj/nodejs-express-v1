// INSTALAR Y DESINSTALAR PAQUETES CON NPM

// Para empezar creamos con npm init, para este caso usamos el npm init --yes para declarar a todo como predeterminado y ya dentro del JSON modificar la descripción y el autor.
// Una vez realizado esto, por ejemplo si queremos instalar Express, lo que hariamos generalmente sería entrar a Google, buscar Express y leer su documentación de instalación, pues dentro de esta misma documentación nos muestra el comando npm install express, es decir que esta sería la forma de instalarlo, necesariamente con npm.

// Por lo que para su instalación abriremos la terminal y escribiremos "npm install express", al finalizar esto nos aparecerán 2 documentos nuevos, el package-lock.json y el node_modules; dentro del node_modules encontraremos todos los distintos paquetes que se instalaron para poder instalar express, así como se encontrará a express. Generalmente no se suele usar demasiado esa carpeta, mayormente es para poder visualizar lo que contienen los módulos o paquetes instalados y poder así incluirlos en los proyectos.
// El siguiente sería el package-lock.json, el cual tendrá información de sus historiales y ese tipo de cosas, más adelante se entrará en más detalle respecto a este JSON.

// Si nosotros entramos a lo que sería el package.json, dentro del mismo podemos observar que en las dependencias ya se encuentra dentro lo que sería express, a diferencia de lo que antes no aparecía, es así que podemos visualizar lo que igual hemos incluido dentro. Así mismo se muestra la versión específica de la versión trabajada y esto sirve para que si llegamos a trabajar con otros desarrolladores, podemos dejarles ver la versión utilizada así como las dpenedencias utilizadas dentro de lo que sería el proyecto.


// ** SI QUEREMOS DESINTALAR EL PAQUETE LO QUE SE TIENE QUE HACER ES:
// Escribimos en la terminal npm uninstall express, y de esta manera se ha desintalado nueztro paquete y así mismo si entramos dentro de las dependencias de nuestro package.json podemos observar que efectivamente express ya no forma parte de nuestras dependencias.


// -- AHORA SI SOLO QUEREMOS DESCARGAR ALGO ESPECÍFICO DE LOS PAQUETES LO QUE SE TIENE QUE HACER ES:

// Para el caso de descargar una versión específica por ejemplo, lo que tenemos que escribir sería "npm install express@4.15.1" de esta manera hemos indicado que se descargue de manera específica una versión de express por ejemplo, y dentro de las dependencias ya aparece express y la versión específica que indicamos


// -- AHORA SE VERÁ OTRA MANERA DE REALIZAR LAS INSTALACIONES
// En package.json tenemos devDependencies, esto es porque algunas dependencias solo se utilizarán cuando la aplicación esté en proceso de desarrollo, sin embargo no son necesarias para la ejecución de la misma, es por esto que podemos guardar esos paquetes en una categoría especial, para esto lo que se tiene que hacer es:
// escribimos "npm install express --save-dev", al presionar enter se instaló lo que es express, sin embargo ahora se puede observar dentro del package.json que express se encuentra dentro de devDependencies para así indicar que son dependencias para el desarrollo.