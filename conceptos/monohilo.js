console.log('Hola Mundo');
console.log('Sigo Activo');

// En otros lenguajes, se ejecuta el bucle y si no se termina
// NO se ejecuta lo que continúa. En Node, SI se ejecutará
let i = 0;
setInterval(function() {
    console.log(i);
    i++;

    // if(i === 5) {
    //     console.log('Se genera error');
    //     var a = 3 + z;
    // }
}, 2000);

console.log('Segundo Hola Mundo');