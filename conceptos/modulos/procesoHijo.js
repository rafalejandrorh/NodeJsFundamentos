const { exec, spawn } = require('child_process');

exec('ls -ltr', (err, stdout, sterr) => {
    if(err) {
        console.error(err);
        return false
    }
    console.log(stdout);
});

exec('node conceptos/modulos/console.js', (err, stdout, sterr) => {
    if(err) {
        console.error(err);
        return false;
    }
    console.log(stdout);
});

let ls = spawn('ls', ['-ltr']);

console.log(`pid: ${ls.pid} \n`);
console.log(`isConnected: ${ls.connected} \n`);

ls.stderr.on('data', function (data) {
    console.log(data);
})

ls.stdout.on('data', function (data) {
    console.log(`isKilled: ${ls.killed} \n`);
    console.log(data.toString());
})

ls.on('exit', function(data) {
    console.log('Proceso terminado', data);
})

console.log(`isKilled: ${ls.killed} \n`);
