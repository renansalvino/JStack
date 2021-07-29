const users = require('../mocks/users');
const products = require ('../mocks/products');
//CRUD de usuários
module.exports = {
  listUsers(request, response)
  {
    const {order} = request.query;

    const sortedUsers = users.sort((a, b) => {
      if(order === 'desc'){
        return a.id < b.id ? 1 : -1;
      }

      return a.id > b.id ? 1 : -1;
    });

    response.writeHead(200, { 'Content-Type': 'application/json' });
    //Dentro do END sempre tenho que mandar uma string
    response.end(JSON.stringify(users));
  },

  listProducts(request, response){
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(products));
  }
}