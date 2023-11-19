console.time('init');
console.log('log');
console.info('info');
console.error('error');
console.warn('warn');

console.count('count');
console.count('count');
console.countReset('count');
console.count('count');

console.table([
    {
        a: 1,
        b: 'Uno'
    },
    {
        a: 2,
        b: 'Dos'
    }
]);

console.group('Conversacion:');
console.log('Hola');

console.group('Hablar:');
console.log('Hablando');
console.log('Hablando');
console.log('Hablando');
console.log('Hablando');
console.groupEnd('Hablar');

console.log('Adios');
console.groupEnd('Conversacion:');

console.time('process');
setTimeout(function() {
    //console.timeLog('process'); 
    console.timeEnd('process'); 
}, 10000);
console.timeEnd('init');

setTimeout(function() {
    console.clear();
}, 20000);
