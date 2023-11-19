const sharp = require('sharp');

sharp('./images/logo.png')
    .resize(80)
    .grayscale()
    .toFile('./images/resizedLogo.png')