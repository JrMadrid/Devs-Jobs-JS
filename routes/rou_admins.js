const express = require ('express');
const bodyParser = require('body-parser');
const routerAdmins = express.Router();
const admonController = require('../controllers/con_admin');

routerAdmins.get('/admin',admonController.getAdmins);
routerAdmins.use(bodyParser.urlencoded({ extended: true }));
routerAdmins.post('/admin', admonController.crearAdmon);

module.exports.routerAdmins = routerAdmins;
