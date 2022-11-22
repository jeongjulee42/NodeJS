const fs = require('fs').promises;

fs.writeFile('./test.txt', 'this is new text for test!').catch(console.error);
fs.appendFile('./test.txt', '\nAdd this text').then(()=>{
    fs.copyFile('./test.txt', './test1.txt').catch(console.error)
}).catch(console.error);
