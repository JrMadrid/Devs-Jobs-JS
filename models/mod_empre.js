const connection = require('../db/connection');
function comprobarUsuario(codigo, password, callback) {
  const query = 'SELECT * FROM usr_empre WHERE codigo = ? AND password = ?';
  connection.query(query, [codigo, password], (error, results) => {
    if (error) {
      // Manejar el error
      console.error('Error ejecutando la consulta SQL:', error);
      return callback(error, null);
    }
    // Verificar si se encontraron resultados
    const exist = results.length > 0;
    callback(null, exist);
  });
}
module.exports =  comprobarUsuario;