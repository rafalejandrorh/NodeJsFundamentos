// Para instalar: npm i bcrypt

const bcrypt = require('bcrypt');

const password = '123456Segura!';

bcrypt.hash(password, 5, function(error, hash) {
    console.log(hash);

    bcrypt.compare(password, hash, function(error, result) {
        //console.log(error);
        console.log(result);
    });

    bcrypt.compare('123456Segura!!', hash, function(error, result) {
        //console.log(error);
        console.log(result);
    });
});

// $2b$15$iPipKuzhN0UH3WV2if595eBjpnamDmQmJuRP.K8YBdTJ6cDdQzvT2 - 5
// $2b$15$iPipKuzhN0UH3WV2if595eBjpnamDmQmJuRP.K8YBdTJ6cDdQzvT2 - 15
// $2b$15$iPipKuzhN0UH3WV2if595eBjpnamDmQmJuRP.K8YBdTJ6cDdQzvT2 - 30