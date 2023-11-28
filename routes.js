const express = require('express');
const router = express.Router();

// Importa el controlador de ciudadanos
const ciudadanosController = require('./controllers/ciudadanosController');

// Ruta para obtener todos los ciudadanos
router.get('/ciudadanos', ciudadanosController.obtenerTodosLosCiudadanos);
router.get('/ciudadanos/:id', ciudadanosController.obtenerCiudadano);
router.put('/ciudadanos/:id', ciudadanosController.actualizarCiudadano);
router.post('/ciudadanos', ciudadanosController.crearCiudadano);
router.delete('/ciudadanos/:id', ciudadanosController.eliminarCiudadano);


// Importa el controlador de tareas
const tareasController = require('./controllers/tareasController');


// Ruta para obtener todas las tareas
router.get('/tareas', tareasController.obtenerTodasLasTareas);
router.get('/tareas/:id', tareasController.obtenerTarea);
router.put('/tareas/:id', tareasController.actualizarTarea);
router.post('/tareas', tareasController.crearTarea);
router.delete('/tareas/:id', tareasController.eliminarTarea);

// Importa el controlador de semana
const semanaController = require('./controllers/semanaController');

// Ruta para obtener todas las tareas
router.get('/semana', semanaController.obtenerSemana);

// Exporta el módulo de rutas
module.exports = router;
