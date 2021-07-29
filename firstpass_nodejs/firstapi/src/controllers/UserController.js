const users = require('../mocks/users');
const products = require ('../mocks/products');
//CRUD de usuários
module.exports = {
  listUsers(request, response)
  {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    //Dentro do END sempre tenho que mandar uma string
    response.end(JSON.stringify(users));
  },

  listProducts(request, response){
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(products));
  }
}