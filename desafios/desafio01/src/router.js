const express = require('express');
const indexController = require('./controllers/root');

const routes = express.Router();

routes.get('/', indexController.root)

module.exports = routes;