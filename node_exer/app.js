const fs = require('fs');

const writeStream = fs.createWriteStream('./file3.txt');
writeStream.on('finish', () => {
    console.log('Finish!');
})

writeStream.write('Hello!');
writeStream.write('World!');
writeStream.end();