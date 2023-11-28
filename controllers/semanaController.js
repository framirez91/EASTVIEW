const db = require('../db'); // Ruta al archivo de conexión a la base de datos

function obtenerSemana(req, res) {
    db.query('SELECT * FROM dias_semana', (err, resultados) => {
        if (err) {
            console.error('Error al obtener la semana:', err);
            res.status(500).send('Error al obtener la semana');
            return;
        }
        res.status(200).json(resultados);
    });
}

module.exports = {
    obtenerSemana
}