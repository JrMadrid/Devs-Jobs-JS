const connection = require('../db/connection');
const comprobarUsuario = require('../models/mod_empre');

// Controlador para manejar las operaciones relacionadas con las empresas
const usrEmpreController = {
  // Método para obtener todas las empresas
  getusrEmpre: (req, res) => {
    connection.query('SELECT * FROM usr_empre', (error, results) => {
      if (error) {
        throw error;
      }
      res.render('empresa/usr_empre.ejs', { resQuery: results });
    });
  },
  createusrEmpre: (req, res) => {
    const usrEmpreCode = req.body.codigo;
    const usrEmpreCorreo = req.body.correo;
    const usrEmpreClave = req.body.clave;
    connection.query('INSERT INTO usr_empre (codigo,correo,password) VALUES (?,?,?)', [usrEmpreCode, usrEmpreCorreo, usrEmpreClave], (error, results, fields) => {
      if (error) {
        console.error('Error al insertar usuario empresa:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        // Si la inserción fue exitosa, devolver una respuesta exit
        res.redirect('/empresa/usuario');
      }
    });
  },
  login: (req, res) => {
    const usrEmpreCode = req.body.codigo;
    const usrEmpreClave = req.body.clave;
    comprobarUsuario(usrEmpreCode, usrEmpreClave, (error, existe) => {
      if (error) {
        // Manejar el error
        console.error('Error al comprobar el usuario:', error);
        return;
      }
      if (existe) {
        res.redirect('/empresa')
        console.log('El usuario existe en la base de datos.');
      } else {
        res.redirect('/empresa/reg_empresa.html')
        console.log('El usuario no existe en la base de datos.');
      }
    });
  },
  getEmpresa: (req, res) => {
    connection.query('SELECT * FROM empresa', (error, results) => {
      if (error) {
        throw error;
      }
      res.render('empresa/empresa.ejs', { resQuery: results });
    });
  },
  createEmpresa: (req, res) => {
    EmpresaID = req.body.empreid;
    Nombre = req.body.nombre;
    RTN = req.body.rtn;
    Direccion = req.body.direccion;
    Telefono = req.body.telefono;
    CorreoElectronico = req.body.correo;
    Descripcion = req.body.descr;
    codigo = req.body.codigo;
    connection.query('INSERT INTO empresa (EmpresaID, Nombre, RTN, Direccion, Telefono, CorreoElectronico, Descripcion, codigo) VALUES (?,?,?,?,?,?,?,?)',
      [EmpresaID, Nombre, RTN, Direccion, Telefono, CorreoElectronico, Descripcion, codigo], (error, results, fields) => {
        if (error) {
          console.error('Error al insertar empresa:', error);
          res.status(500).json({ error: 'Error interno del servidor, datos no validos o no se encontro' });
        } else {
          // Si la inserción fue exitosa, devolver una respuesta exit
          res.redirect('/empresa/empresa');
        }
      });
  },
  getContratos: (req, res) => {
    connection.query('SELECT * FROM contrato', (error, results) => {
      if (error) {
        throw error;
      }
      res.render('empresa/contratos.ejs', { resQuery: results });
    });
  },
  createVacante: (req, res) => { ///
    VacanteID = req.body.VacanteID;
    EmpresaID = req.body.EmpresaID;
    Puesto = req.body.Puesto;
    Jornada = req.body.Jornada;
    Descripcion = req.body.Descripcion;
    Lugar = req.body.Lugar;
    Edad = req.body.Edad;
    GradoAcademico = req.body.GradoAcademico;
    Experiencia = req.body.Experiencia;
    Conocimientos = req.body.Conocimientos;
    DisponibilidadViajar = req.body.DisponibilidadViajar;
    DocumentosRequeridos = req.body.DocumentosRequeridos;
    connection.query('INSERT INTO vacante (VacanteID ,EmpresaID , Puesto ,Jornada , Descripcion , Lugar ,Edad , GradoAcademico, Experiencia , Conocimientos , DisponibilidadViajar , DocumentosRequeridos) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
      [VacanteID ,EmpresaID , Puesto ,Jornada , Descripcion , Lugar  ,Edad , GradoAcademico, Experiencia , Conocimientos , DisponibilidadViajar , DocumentosRequeridos], (error, results, fields) => {
        if (error) {
          console.error('Error al insertar usuario postulante:', error);
          res.status(500).json({ error: 'Error interno del servidor, datos no validos o no se encontro ' });
        } else {
          // Si la inserción fue exitosa, devolver una respuesta exit
          res.redirect('/empresa');
        }
      });
  }
};

// Exportar el controlador para que pueda ser utilizado en otros archivos
module.exports = usrEmpreController;