// MÓDULO OS
// Contiene funcionalidad para obtener información sobre el sistema operativo en el cual se ejecuta la aplicación

// ** Este módulo no está disponible de manerla global, por lo que es necesario el uso de require **

const os = require('os');

// type() permite tener acceso al tipo de sistema operativo en el cuál se está ejecutando la aplicación de node
// console.log(os.type());

// homedir() indica el directorio principal del archivo, exceptuando lo de documents y todo eso, es solo lo main por así decirlo, el disco, carpeta de usuarios y el usuario
// console.log(os.homedir());

// Para conocer el tiempo que se ha estado ejecutando el sistema operativo desde su inicio en segundos, se utiliza uptime()
// console.log(os.uptime());

// con usefInfo se obtiene información del usuario, esto sería el nombre, el homedir, etc.
// console.log(os.userInfo());