const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'bzi6bwexyzolq1o5xosq-mysql.services.clever-cloud.com',
    user: 'uc2lfkroezutenes',
    password: 'pVtNAhJMisk4TGkcOefd',
    database: 'bzi6bwexyzolq1o5xosq'
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = connection;
