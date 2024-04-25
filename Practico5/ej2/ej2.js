/**Tarea 2 
Pruebe y revise la siguiente aplicación 
Módulo: 
// greet.js 
const express = require('express'); 
module.exports = function(options = {}) { // Router factory
const router = express.Router(); 
router.get('/greet', (req, res, next) => { 
res.end(options.greeting); 
}); 
return router; 
}; 
Solicitud: 
// app.js 
const express = require('express'); 
const greetMiddleware = require('./greet.js'); 
express()
.use('/api/v1/', greetMiddleware({ greeting:'Hello world' })) 
.listen(8080); 
Acceder con http://<hostname>:8080/api/v1/greet
¿Cuál es la respuesta de la aplicación? 
¿Qué beneficios se obtienen por separar la aplicación en módulos? 
¿Agregue el tratamiento para otra ruta y verifique la reutilización de código? */