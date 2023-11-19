// Para instalar: npm i moment
// Es recomendada para trabajar todo lo relacionado con fechas, ya que
// NodeJs por sí mismo lo vuelve complejo

const moment = require('moment');

let ahora = moment();

console.log(ahora.format('YYYY-MM-DD HH:mm'));