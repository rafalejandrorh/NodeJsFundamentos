const process = require('process');

process.on('uncaughtException', function(error, origin) {
    console.log('Se nos ha olvidado capturar un error \n');
    console.log(error, '\n');
    console.log(origin, '\n');
})

// process.on('uncaughtRejection', function(err) {
//     console.log('Promise rejected');
// })

process.on('beforeExit', function() {
    console.log('El proceso va a terminar');
})

process.on('exit', function() {
    console.log('El proceso se terminó');
    // si aquí se coloca un setTimeout por ejemplo, no se va a ejecutar
})

main();

console.log('Si el error no se recoje, no sale');