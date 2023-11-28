const mysql = require('mysql');

function createConnection() {
    const connection = mysql.createConnection({
        host: '34.176.129.126',
        user: 'root',
        password: "#Klu{t@)3n?det|E",
        database: 'bzi6bwexyzolq1o5xosq',
        reconnectInterval: 1000, // Intervalo de tiempo para intentar reconectar (en milisegundos)
    });

    connection.connect((err) => {
        if (err) {
            console.error('Error al conectar a la base de datos:', err);
            setTimeout(createConnection, 2000); // Intenta reconectar después de 2 segundos
            return;
        }
        console.log('Conexión exitosa a la base de datos MySQL');
    });

    connection.on('error', (err) => {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Se perdió la conexión con la base de datos. Intentando reconectar...');
            createConnection(); // Intenta reconectar
        } else {
            throw err;
        }
    });

    return connection;
}

const connection = createConnection();

module.exports = connection;
