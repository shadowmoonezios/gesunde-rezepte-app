const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Willkommen in der Gesunden Rezepte App!');
});

mongoose.connect('mongodb://localhost:27017/gesunde-rezepte', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
  });
}).catch(err => {
  console.error('Datenbankverbindung fehlgeschlagen:', err);
});