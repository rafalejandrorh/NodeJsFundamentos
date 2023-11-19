const os = require('os');
const SIZE = 1024;

function kb(bytes) { return bytes / SIZE };
function mb(bytes) { return kb(bytes) / SIZE };
function gb(bytes) { return mb(bytes) / SIZE };

console.log(`architecture: ${os.arch()} \n`);
console.log(`platform: ${os.platform()} \n`);
console.log(`cores count: ${os.cpus().length} \n`);
console.log(os.cpus());
console.log(`\n`);
console.log(`total memory RAM: ${gb(os.totalmem())} \n`);
console.log(`free memory RAM: ${gb(os.freemem())} \n`);
console.log(`homedir: ${os.homedir()}`);
console.log(`tmp: ${os.tmpdir()}`);
console.log(`hostname: ${os.hostname()}`);
console.log(os.networkInterfaces());
