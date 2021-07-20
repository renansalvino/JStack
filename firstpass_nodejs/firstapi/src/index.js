//Importando módulo HTTP
const http = require('http');
const users = require('./mocks/users');


const server = http.createServer((request, response) => {
  console.log(`Request method: ${request.method} | Endopoint: ${request.url}`);

  if (request.url === '/users' && request.method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    //Dentro do END sempre tenho que mandar uma string
    response.end(JSON.stringify(users));
  }else {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.end(`Cannot ${request.method} ${request.url}`);
  }
  
  // response.writeHead(200, { 'Content-Type': 'text/html' });
  // response.end('<h1>Ola mundo!<h1>');
});

server.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'))