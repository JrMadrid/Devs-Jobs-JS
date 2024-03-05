const connection = require('../db/connection');
const comprobarUsuario = require('../models/mod_postu');

// Controlador para manejar las operaciones relacionadas con los postulantes
const usrPostuController = {
  // Método para obtener todas los postulantes
  getusrPostu: (req, res) => {
    connection.query('SELECT * FROM usr_postu', (error, results) => {
      if (error) {
        throw error;
      }
      res.render('postulante/usr_postu.ejs', { resQuery: results });
    });
  },
  createusrPostu: (req, res) => {
    const usrPostuName = req.body.nombre;
    const usrPostuCorreo = req.body.correo;
    const usrPostuClave = req.body.clave;
    connection.query('INSERT INTO usr_postu (nickname,correo,password) VALUES (?,?,?)', [usrPostuName, usrPostuCorreo, usrPostuClave], (error, results, fields) => {
      if (error) {
        console.error('Error al insertar usuario postulante:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        // Si la inserción fue exitosa, devolver una respuesta exit
        res.redirect('/postulante/usuario');
      }
    });
  },
  login: (req, res) => {
    const usrPostuName = req.body.nombre;
    const usrPostuClave = req.body.clave;
    comprobarUsuario(usrPostuName, usrPostuClave, (error, existe) => {
      if (error) {
        // Manejar el error
        console.error('Error al comprobar el usuario:', error);
        return;
      }
      if (existe) {
        res.redirect('/postulante')
        console.log('El usuario existe en la base de datos.');
      } else {
        res.redirect('/postulante/reg_postulante.html')
        console.log('El usuario no existe en la base de datos.');
      }
    });
  },
  getPostulante: (req, res) => {
    connection.query('SELECT * FROM postulante', (error, results) => {
      if (error) {
        throw error;
      }
      res.render('postulante/postulante.ejs', { resQuery: results });
    });
  },
  createPostulante: (req, res) => {
    const NumeroIdentidad = req.body.numid;
    const Nombres = req.body.nombre;
    const Apellidos = req.body.apellido;
    const CorreoElectronico = req.body.correo;
    const Telefono = req.body.telefono;
    const FechaNacimiento = req.body.fechan;
    const Sexo = req.body.sexo;
    const Direccion = req.body.direccion;
    const Estadop = req.body.estado;
    const Area = req.body.area;
    const Descripcion = req.body.descripcion;
    const nickname = req.body.nickname;
    connection.query('INSERT INTO postulante (NumeroIdentidad, Nombres, Apellidos, CorreoElectronico, Telefono, FechaNacimiento,Sexo,Direccion, Estadop, Area, Descripcion, nickname) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
      [NumeroIdentidad,Nombres,Apellidos,CorreoElectronico,Telefono,FechaNacimiento,Sexo,Direccion,Estadop,Area,Descripcion,nickname], (error, results, fields) => {
        if (error) {
          console.error('Error al insertar usuario postulante:', error);
          res.status(500).json({ error: 'Error interno del servidor, datos no validos o no se encontro' });
        } else {
          // Si la inserción fue exitosa, devolver una respuesta exit
          res.redirect('/postulante/postulante');
        }
      });
  },
  getVacantes: (req, res) => {
    connection.query('SELECT * FROM vacante', (error, results) => {
      if (error) {
        throw error;
      }
      res.render('postulante/vacantes.ejs', { resQuery: results });
    });
  },
  createContrato: (req, res) => {
    const ContratoID = req.body.contratoid;
    const VacanteID = req.body.vacanteid;
    const NumeroIdentidad = req.body.numid;
    const TipoContrato = req.body.tipoc;
    const FechaInicio = req.body.fechai;
    const FechaVencimiento = req.body.fechaf;
    const Horario = req.body.horario;
    const Sueldo = req.body.sueldo;
    const DiasLaborales = req.body.diasl;
    const DiasVacaciones = req.body.diasv;
    const Departamento = req.body.depa;
    connection.query('INSERT INTO contrato (ContratoID, VacanteID, NumeroIdentidad, TipoContrato,FechaInicio, FechaVencimiento,Horario,Sueldo, DiasLaborales,DiasVacaciones,Departamento) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
      [ContratoID, VacanteID, NumeroIdentidad, TipoContrato,FechaInicio, FechaVencimiento,Horario,Sueldo, DiasLaborales,DiasVacaciones,Departamento], (error, results, fields) => {
        if (error) {
          console.error('Error al insertar usuario postulante:', error);
          res.status(500).json({ error: 'Error interno del servidor, datos no validos o no se encontro ' });
        } else {
          // Si la inserción fue exitosa, devolver una respuesta exit
          res.redirect('/postulante');
        }
      });
  }
};

// Exportar el controlador para que pueda ser utilizado en otros archivos
module.exports = usrPostuController;