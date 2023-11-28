const express = require('express');
const app = express();
const routes = require('./routes');
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el módulo CORS

app.use(cors()); // Habilita CORS para todas las rutas
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

// Middleware de body-parser (ya no necesario en versiones recientes de Express)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
