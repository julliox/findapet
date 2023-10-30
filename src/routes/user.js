const { Router } = require('express');
const routes = Router();
const UserController = require('../controller/UserController')


routes.post('/', UserController.create)

module.exports = app => app.use('/api/users', routes);
