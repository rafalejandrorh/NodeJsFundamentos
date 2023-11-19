
console.time('sum');
let suma = 0;
for(let i = 0; i < 100000000; i++) {
    suma += 1;
};
console.timeEnd('sum');

console.time('sum2');
let suma2 = 0;
for(let j = 0; j < 100000000; j++) {
    suma2 += 1;
};
console.timeEnd('sum2');