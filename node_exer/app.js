const fs = require('fs');

fs.promises.rename('./file_new.txt', './test.txt').then(console.log("change complete")).catch(console.log)