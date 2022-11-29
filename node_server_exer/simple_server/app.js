const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/'){
        res.setHeader('Content-Type', 'text/html');
        const read = fs.createReadStream('./template/index.html');
        read.pipe(res);
        
    } else if (url === '/hello'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<a href="#">Click me!</a>')
    } else {
        res.write('Wrong');
    }
    
})

server.listen(8080);