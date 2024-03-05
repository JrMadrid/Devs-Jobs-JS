const express = require ('express');
const bodyParser = require('body-parser');
const routerEmpre = express.Router();
const usrEmpreController = require('../controllers/con_empresa');

routerEmpre.get('/empresa/usuario',usrEmpreController.getusrEmpre);
routerEmpre.use(bodyParser.urlencoded({ extended: true }));
routerEmpre.post('/empresa/usuario', usrEmpreController.createusrEmpre);
routerEmpre.post('/empresa/login',usrEmpreController.login);

routerEmpre.get('/empresa/empresa',usrEmpreController.getEmpresa);
routerEmpre.post('/empresa/empresa',usrEmpreController.createEmpresa);
routerEmpre.get('/empresa',usrEmpreController.getContratos);
routerEmpre.post('/empresa/vacante',usrEmpreController.createVacante);

module.exports.routerEmpre = routerEmpre;