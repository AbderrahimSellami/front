const express = require('express');
const app = express();
const port = 5000;
const connection = require('./models/connect'); // Importer la connexion à la base de données

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});