require('dotenv').config();

const express = require('express');
const pg = require('pg');
const Client = pg.Client;
const app = express();

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
};

const db = new Client(config);
db.connect(() => {
  console.log('successfully connected to the db');
});

db.query('SELECT 1 + 1;')
  .then(data => console.log(data.rows));

const port = process.env.PORT || 1234;

app.use(express.static('./my-app/build'));

app.get('/api/users', (req, res) => {
  res.json({ some: 'users' });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
