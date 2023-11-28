const db = require('../db'); // Ruta al archivo de conexión a la base de datos


function obtenerTodosLosCiudadanos(req, res) {
    db.query('SELECT * FROM ciudadanos', (err, resultados) => {
        if (err) {
            console.error('Error al obtener los ciudadanos:', err);
            res.status(500).send('Error al obtener los ciudadanos');
            return;
        }
        res.status(200).json(resultados);
    });
}

function obtenerCiudadano(req, res) {
    db.query('SELECT * FROM ciudadanos WHERE id_ciudadano = ?', [req.params.id], (err, resultados) => {
        if (err) {
            console.error('Error al obtener el ciudadano:', err);
            res.status(500).send('Error al obtener el ciudadano');
            return;
        }
        res.status(200).json(resultados);
    });
}

function actualizarCiudadano(req, res) {
    db.query('UPDATE ciudadanos SET ? WHERE id_ciudadano = ?', [req.body, req.params.id], (err, resultados) => {
        if (err) {
            console.error('Error al actualizar el ciudadano:', err);
            res.status(500).send('Error al actualizar el ciudadano');
            return;
        }
        res.status(200).json({ message: 'Usuario actualizado exitosamente' });

    });
}

function crearCiudadano(req, res) {
    if (!req.body || !req.body.nombre) {
        res.status(400).send('El campo "nombre" es requerido');
        return;
    }

    const nuevoCiudadano = {
        nombre: req.body.nombre,
    };
    db.query('INSERT INTO ciudadanos SET ?', [nuevoCiudadano], (err, resultados) => {
        if (err) {
            console.error('Error al crear el ciudadano:', err);
            res.status(500).send('Error al crear el ciudadano');
            return;
        }
        res.status(200).json({ message: 'Usuario creado exitosamente' });

    });
}



function eliminarCiudadano(req, res) {
    db.query('DELETE FROM ciudadanos WHERE id_ciudadano = ?', [req.params.id], (err, resultados) => {
        if (err) {
            console.error('Error al eliminar el ciudadano:', err);
            res.status(500).send('Error al eliminar el ciudadano');
            return;
        }
        res.status(200).json({ message: 'Usuario eliminado exitosamente' });

    });
}

module.exports = { obtenerTodosLosCiudadanos, obtenerCiudadano, actualizarCiudadano, crearCiudadano, eliminarCiudadano };
