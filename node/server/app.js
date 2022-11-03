const http = require("http");

const server = http.createServer((req, res) => {
  console.log("server Start");
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.url);
  res.write("Hi bro!!!");
  res.end();
});
server.listen(8080);
