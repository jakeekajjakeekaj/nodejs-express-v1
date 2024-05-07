// Ya se vió un módulo en la sección pasada, ahora toca el turno de:
// MÓDULO PROCESS
// Es un módulo built-in, provee Información sobre el proceso de Node.js que se está ejecutando, así mismo puede tener cierto control sobre el proceso
// Si nosotros escribimos console.log(process); el resultado que tenemos es mucha información acerca de node, esto quiere decir la versión de node que se está usando, así como otras versiones, plataofrma, motor, distintos módulos y entre mucha otra infromación
// **ENTRE LAS PROPIEDADES MÁS IMPORTANTES DE ESTE MÓDULO SE ENCUENTRAN:
    /*
        - process.env : Viene de environment y básicamente describe el ambiente de ejecución del programa

        - process.argv : Si nosotros escribimos "console.log(process.argv);" y lo ejecutamos como node app.js, se convierte en una especie de arreglo que quedaría como [node, app.js], provocando así que la impresión sea de las direcciones de node y de app.js; sin embargo si nosotros escribimos  node app.js 6 7, esto lo que hace es que se transforma en una especie de arreglo que quedaría de la siguiente manera [node, app.js, 6, 7], imprimiendo así la dirección de node, la dirección de app.js, el valor 6 y el valor 7; dicho esto si ahora tenemos "console.log(process.argv[2]):" lo que se está indicando aquí es que solo se estaría tomando el valor de 6, respetando así el funcionamiento de cualquier arreglo promedio
        Así mismo se puede trabajar esto con un ciclo for, por ejemplo:
        for (let i = 1; i < process.argv.length; i++) {
            console.log(process.argv[i]);
        }

        - process.memoryUsage() : De esta manera se puede obtener el uso de memoria
    */