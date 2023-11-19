// Definir variable de entorno a través del comando para correr el proceso:
// NOMBRE=Rafael npm run entorno
// NOMBRE=Rafael WEB=platzi.com npm run entorno

let saludo = `Hola ${process.env.NOMBRE || 'Sin Nombre'}`;
let presentacionWeb = `Mi Web es: ${process.env.WEB || 'No tengo Web'}`;

console.log(saludo);
console.log(presentacionWeb);
