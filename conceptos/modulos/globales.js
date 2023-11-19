console.log(global);

let i = 0;
let interval = setInterval(function () {
    console.log('Hola');
    if(i === 3) {
        console.log('Se limpia el intervalo');
        clearInterval(interval);
    }
    i++;
}, 1000)

setImmediate(function() {
    console.log('Hola Immediate');
})

//console.log(`${process} \n`);
console.log(__filename);
console.log(__dirname);

// No usar al menos que realmente sea necesario
global.miVariable = 'ElValor';
console.log(global.miVariable);