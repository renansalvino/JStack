//Importando módulo HTTP
const http = require('http');
const { URL } = require('url');

const routes = require('./routes');

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://localhost:3000${request.url}`);
  console.log(`Request method: ${request.method} | Endopoint: ${parsedUrl.pathname}`);

  //Transforma em Objetos JavaScript
  // console.log(Object.fromEntries(parsedUrl.searchParams));

  let { pathname } = parsedUrl;

  const splitEndpoint = pathname.split('/').filter(Boolean);

  if (splitEndpoint.lenght > 1) {

    parsedUrl.pathname = `/${splitEndpoint[0]}/:id`;
    id = splitEndpoint[1];
  }


  const route = routes.find((routeObj) => (
    routeObj.endpoint === parsedUrl.pathname && routeObj.method === request.method
  ));

  if (route) {
    request.query = Object.fromEntries(parsedUrl.searchParams);
    request.params = (id);
    route.handler(request, response);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
  }
});

server.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'))
