const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/'){
        res.write('Welcome');
    } else if (url === '/hello'){
        res.write('Hello');
    } else {
        res.write('Wrong');
    }
    res.end();
})

server.listen(8080);