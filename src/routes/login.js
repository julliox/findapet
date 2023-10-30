const { Router } = require('express');
const routes = Router();
const LoginController = require('../controller/LoginController')


routes.post('/', LoginController.doLogin)

module.exports = app => app.use('/api/login', routes);