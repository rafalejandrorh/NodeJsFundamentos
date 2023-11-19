function hola(nombre, myCallback) {
    console.log('soy la función hola');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola, ${nombre}`);
            resolve(nombre);
        }, 1000);
    });
};

function adios(nombre, otroCallback) {
    console.log('soy la funcion adios');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios, ${nombre}`);
            resolve();
        }, 1000);
    });
};

function hablar(nombre) {
    return new Promise(function(resolve, reject) {
        console.log('soy la funcion hablar');
        setTimeout(() => {
            console.log(`Estoy hablando`);
            //reject('Hay un error')
            resolve(nombre);
        }, 1000);
    });
};

// Trabajar con promesas
console.log('Iniciando proceso');
hola('Rafael')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Proceso Terminado');
    })
    .catch(error => {
        console.log('Catch del error');
        console.log(error);
    })

console.log('Me ejecuto primero porque la función es asíncrona');