const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const name = 'JeongJu'
const courses = [{name:'HTML'}, {name:'CSS'}, {name:'JS'}];

const server = http.createServer((req, res) => {
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');
    if (url === '/'){
        ejs.renderFile('./template/index.ejs', {name,courses},).then(data => res.end(data))
        
    } else if (url === '/hello'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<a href="#">Click me!</a>')
    } else {
        res.write('Wrong');
    }
    
})

server.listen(8080);