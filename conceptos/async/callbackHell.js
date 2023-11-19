function hola(nombre, myCallback) {
    console.log('soy la función hola');
    setTimeout(() => {
        console.log(`Hola, ${nombre}`);
        myCallback();
    }, 1000);
};

function adios(nombre, otroCallback) {
    console.log('soy la funcion adios');
    setTimeout(() => {
        console.log(`Adios, ${nombre}`);
        otroCallback();
    }, 1000);
};

function hablar(callbackHablar) {
    console.log('soy la funcion hablar');
    setTimeout(() => {
        console.log(`Estoy hablando`);
        callbackHablar();
    }, 1000);
};

function conversacion(nombre, veces, callback) {
    if(veces > 0) {
        hablar(function() {
            conversacion(nombre, --veces, callback);
        })
    }else{
        adios(nombre, callback);
    }
}

// CallbackHell
console.log('Iniciando proceso...');
hola('Rafael', function(nombre) {
    hablar(function() {
        hablar(function() {
            adios(nombre, function() {
                console.log('Terminando proceso... \n');
            });
        });
    });
});

// Solución a callbackHell
console.log('Iniciando proceso...');
hola('Rafael', function(nombre) {
    conversacion(nombre, 4, function() {
        console.log('Proceso Terminado');
    });
});


console.log('Me ejecuto primero porque la función es asíncrona');