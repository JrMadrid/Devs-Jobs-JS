const express = require ('express');
const bodyParser = require('body-parser');
const routerPostu = express.Router();
const usrPostuController = require('../controllers/con_postulante');


routerPostu.get('/postulante/usuario',usrPostuController.getusrPostu);
routerPostu.use(bodyParser.urlencoded({ extended: true }));
routerPostu.post('/postulante/usuario', usrPostuController.createusrPostu);
routerPostu.post('/postulante/login',usrPostuController.login);

routerPostu.get('/postulante/postulante',usrPostuController.getPostulante);
routerPostu.post('/postulante/postulante',usrPostuController.createPostulante);
routerPostu.get('/postulante',usrPostuController.getVacantes);
routerPostu.post('/postulante/contrato',usrPostuController.createContrato);


module.exports.routerPostu = routerPostu;