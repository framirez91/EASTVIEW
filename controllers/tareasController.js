const db = require('../db'); // Ruta al archivo de conexión a la base de datos

function obtenerTodasLasTareas(req, res) {
    db.query('SELECT * FROM tareas', (err, resultados) => {
        if (err) {
            console.error('Error al obtener las tareas:', err);
            res.status(500).send('Error al obtener las tareas');
            return;
        }
        res.status(200).json(resultados);
    });
}

function obtenerTarea(req, res) {
    db.query('SELECT * FROM tareas WHERE id_tarea = ?', [req.params.id], (err, resultados) => {
        if (err) {
            console.error('Error al obtener la tarea:', err);
            res.status(500).send('Error al obtener la tarea');
            return;
        }
        res.status(200).json(resultados);
    });
}

function actualizarTarea(req, res) {
    const datosActualizados = {
        id_ciudadano: req.body.id_ciudadano,
        nombre_ciudadano: req.body.nombre_ciudadano,
        id_dia_semana: req.body.id_dia_semana,
        tarea: req.body.tarea,
        estado: req.body.estado
    };

    db.query('UPDATE tareas SET ? WHERE id_tarea = ?', [datosActualizados, req.params.id], (err, resultados) => {
        if (err) {
            console.error('Error al actualizar la tarea:', err);
            res.status(500).send('Error al actualizar la tarea');
            return;
        }
        res.status(200).json({ message: 'Tarea actualizada exitosamente' });
    });
}


function crearTarea(req, res) {
    const nuevaTarea = {
        id_ciudadano: req.body.id_ciudadano,
        nombre_ciudadano: req.body.nombre_ciudadano,

        id_dia_semana: req.body.id_dia_semana,
        tarea: req.body.tarea,
        estado: req.body.estado
    };

    db.query('INSERT INTO tareas SET ?', nuevaTarea, (err, resultados) => {
        if (err) {
            console.error('Error al crear la tarea:', err);
            res.status(500).send('Error al crear la tarea');
            return;
        }
        res.status(201).json({ message: 'Tarea creada exitosamente', nuevaTarea });
    });
}


function eliminarTarea(req, res) {
    db.query('DELETE FROM tareas WHERE id_tarea = ?', [req.params.id], (err, resultados) => {
        if (err) {
            console.error('Error al eliminar la tarea:', err);
            res.status(500).json({ error: 'Error al eliminar la tarea' });
            return;
        }
        res.status(200).json({ message: 'Tarea eliminada correctamente' });
    });
}



module.exports = { obtenerTodasLasTareas, obtenerTarea, actualizarTarea, crearTarea, eliminarTarea };