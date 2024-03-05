const AdmonTemp = require('../models/mod_admins');
const {administradores} = require('../db/admins'); // Importar directamente el objeto JavaScript desde el archivo

const admonController = {
  getAdmins(req, res) {
    res.render('admon/admins.ejs', { resQuery: administradores });
  },
  // Otros métodos del controlador...
  crearAdmon(req, res) {
    const adminNAME = req.body.nombre;
    const adminID = req.body.id;
    const adminPSS = req.body.passw;
    let admon3 = new AdmonTemp(adminNAME, adminID, adminPSS)
    administradores.push({
      name: admon3.name,
      id: admon3.id,
      password: admon3.password,
      nivel: admon3.nivel
    })
    res.redirect('/admin')
  }
};

module.exports = admonController;
