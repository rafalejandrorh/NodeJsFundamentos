const fs = require('fs');
const stream = require('stream');
const util = require('util');

//const inputImage = await fs.readFile('./Files/images/STScI-01GA6KKWG229B16K4Q38CH3BXS.png');
//const inputImageStream = fs.createReadStream('./Files/images/STScI-01GA6KKWG229B16K4Q38CH3BXS.png');

let data = '';

let readableStream = fs.createReadStream('./documents/input.txt');
//readableStream.setEncoding('utf-8');
// readableStream.on('data', function(chunk) {
//     console.log(chunk);
// })

// readableStream.on('end', function() {
//     console.log(data);
// })

//process.stdout.write('Hola');
//process.stdout.write('Que tal');

const transform = stream.Transform;

function Mayus() {
    transform.call(this);
}

util.inherits(Mayus, transform);

Mayus.prototype._transform = function(chunk, codif, callback) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    callback();
};

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);