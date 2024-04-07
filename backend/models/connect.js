
const mysql = require('mysql');

// Créer une connexion
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gestion_des_soutenances'
});



// Établir la connexion
connection.connect((err) => {
  if (err) throw err;
  console.log('Connecté à la base de données MySQL!');
});

module.exports = connection;
