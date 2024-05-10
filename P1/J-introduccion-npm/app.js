// INTRODUCCIÓN A NPM
// NPM es el archivo de software más grande del mundo que contiene paquetes que puedes instalar y usar con Node.js; estos paquetes son alojados en el rmegistro de npm.

// Todos los paquetes que tengamos, se agruparán en una carpeta llamada node_modules y serán incluidos con require.

// Una DEPENDENCIA es un paquete que necesita de otro paquete para funcionar correctamente

// CREAR PARQUETE CON NPM
// Se debe crear una carpeta, para este caso se creará una llamada "mi-paquete", posterior a esto accedemos a esta ruta desde la consola, escribimos "npm init".
// Posterior a esto entramos en un entorno que nos da ciertas opciones, nosotros podemos presionar ctrl + c para finalizar, debemos presionar enter para ocnfirmar el nombre del paquete (mi-paquete), después sale la versión, en este caso damos enter para confirmar y en la descripción indicamos cualquier tipo de descripción y presionamos enter, después nos pide el entry point lo que sería digamos el index del paquete, presionamos enter para confirmar (para este caso sería index.js por defecto), posterior a esto tenemos el test command pero lo podemos dejar vacío, igual dejaremos vacío al git repository, lo mismo con keywords, con el autor podemos poner nuestro nombre, en la licencia por defecto es la ISC.
// Una vez finalizado todo nos pregunta si la información es correcta, al presionar enter confirmamos que así es.
// Al realizar esto vemos un archivo .json en la carpeta

// ** COMO DATO INTERESANTE SI QUEREMOS UN ARCHIVO package.json CON TODOS LOS VALORES POR DEFECTO, BASTA CON ESCRIBIR "npm init --yes" Y DE ESTA MANERA SE CREARÁ EL ARCHIVO CON TODOS LOS VALORES POR DEFECTO

// Si tenemos problemas estos son los pasos que realicé para resolverlos:
// - Si indica que la dirección no corresponde y efectivamente no corresponde, prueba mejor descargando un nvm, el cual a parte de ser una herramienta muy poderosa para manejar diferentes tipos de versiones de Node y Npm, ayudará a que sea lo estable, se instale de manera global y así ya no habrán problemas
// - Si indica que los scripts no se pueden ejecutar, escribe el comando como administrador dentro de la powershell el siguiente comando: Set-ExecutionPolicy RemoteSigned -Scope CurrentUser, después de esto, si queremos la mayor seguridad posible, al acabar de utilizar nom podemos escribir: Set-ExecutionPolicy Restricted -Scope CurrentUser