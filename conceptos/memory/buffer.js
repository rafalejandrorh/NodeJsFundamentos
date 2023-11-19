//let buffer = Buffer.alloc(4);
//let buffer = Buffer.from([1, 2, 5]);
//let buffer = Buffer.from('Hola Mundo');

//console.log(buffer);
//console.log(buffer.toString());

// -- 

let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97;
};
console.log(abc);
console.log(abc.toString());

let abcUpperCase = abc;
for (let i = 0; i < 26; i++) {
    abcUpperCase[i] = i + 65;
};
console.log(abcUpperCase);
console.log(abcUpperCase.toString());

// Para entender la transformación de cada caracter al abecedario
// https://www.ascii-code.com/