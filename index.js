const express = require('express');
const app = express();
const routes = require('./routes'); // Importa tus rutas
const db = require('./db'); 
const bodyParser = require('body-parser');


// ... Otras configuraciones de tu aplicación
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/', routes); // Usar las rutas definidas en routes.js

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

