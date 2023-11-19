function soyAsincrono(nombre, myCallback) {
    console.log('Hola, soy asincrono');
    setTimeout(() => {
        console.log('Estoy siendo asincrono');
        console.log(`Hola, ${nombre}`);
        myCallback();
    }, 1000);
};

function adios(nombre, myCallback) {
    console.log('Hola, soy la funcion de despedida');
    setTimeout(() => {
        console.log('Estoy siendo asincrono');
        console.log(`Adios, ${nombre}`);
        myCallback();
    }, 1000);
};

console.log('Iniciando función asíncrona');
soyAsincrono('Rafael', function() {
    console.log('Función Asíncrona finalizada \n');
});

console.log('Iniciando función de despedida');
adios('Rafael', function() {
    console.log('Función de despedida finalizada \n');
});

// console.log('Iniciando función sincrona');
// soyAsincrono('Rafael', function(nombre) {
//     adios(nombre, function() {
//         console.log('Función sincrona finalizada \n');
//     });
// });

console.log('Me ejecuto primero porque la función es asíncrona');