async function hola(nombre, myCallback) {
    console.log('soy la función hola');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola, ${nombre}`);
            resolve(nombre);
        }, 1000);
    });
};

async function adios(nombre, otroCallback) {
    console.log('soy la funcion adios');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios, ${nombre}`);
            resolve();
        }, 1000);
    });
};

async function hablar(nombre) {
    return new Promise(function(resolve, reject) {
        console.log('soy la funcion hablar');
        setTimeout(() => {
            console.log(`Estoy hablando`);
            //reject('Hay un error')
            resolve(nombre);
        }, 1000);
    });
};

async function main() {
    let nombre = await hola('Rafael');
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso');
}

console.log('Inicia el proceso');
main();

console.log('Me ejecuto primero porque la función es asíncrona');