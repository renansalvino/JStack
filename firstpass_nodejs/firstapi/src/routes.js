const userController = require ('./controllers/UserController');

module.exports = [
  //Cada um dos objetos vai representar uma rota da nossa API
  {
    endpoint: '/users',
    method: 'GET',
    handler: userController.listUsers,
  },
  {
    endpoint: '/produtos',
    method: 'GET',
    handler: userController.listProducts,
  },
];

