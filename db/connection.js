const mysql = require('mysql'); //El módulo 'mysql' es una biblioteca que proporciona funcionalidades para conectarse y trabajar con bases de datos MySQL en Node.js. 

// Configura la conexión a la base de datos
const connection = mysql.createConnection({
	host: 'localhost', // O la dirección IP o el nombre de dominio del servidor de tu base de datos
	port: 3306, // Puerto de MySQL
	user: 'root', // Nombre de usuario de tu base de datos
	password: '1234', // Contraseña de tu base de datos
	database: 'devsjobs', // Nombre de tu base de datos
	connectTimeout: 10000 // Opcional: tiempo de espera de la conexión
});

// Conecta a la base de datos
connection.connect((error) => {
	if (error) {
		console.error('Error al conectar a la base de datos:', error.message);
	} else {
		console.log('Conexión exitosa a la base de datos');
	}
});

module.exports = connection;