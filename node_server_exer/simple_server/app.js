const http = require('http');

const courses = [{name:'HTML'}, {name:'CSS'}, {name:'JS'}];

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/courses');{
        if(method === 'GET'){
            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify(courses));
        }
        else if (method === 'POST'){
            const body = [];
            
        }
    }
})

server.listen(8080);