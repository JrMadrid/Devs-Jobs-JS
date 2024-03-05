const express = require('express');
const path = require('path');  //El módulo 'path' proporciona utilidades para trabajar con rutas de archivos y directorios en Node.js. 
const app = express();
const port = 3000;
/* Importar Router */
const {routerPostu} = require('./routes/rou_postu')
const {routerEmpre} = require('./routes/rou_empre');
const {routerAdmins} = require('./routes/rou_admins');
/* Routers */
app.use(routerPostu);
app.use(routerEmpre);
app.use(routerAdmins);

// Configuración para renderizar vistas EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para manejar direcciones no especificadas
app.use((req, res, next) => {
  if (!req.route) { // Verificar si no hay una ruta coincidente
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html')); // Enviar el archivo 404.html
  } else {
    next(); // Pasar al siguiente middleware si hay una ruta definida
  }
});
// Inicia el servidor Express
app.listen(port, () => {
  console.log(`Servidor Express escuchando http://localhost:${port}`);
});
