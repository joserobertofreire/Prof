const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'orders',
});

app.post('/orders', async (req, res) => {
  const { product, email } = req.body;
  await pool.query('INSERT INTO orders (product, email) VALUES ($1, $2)', [product, email]);
  res.send('Pedido cadastrado!');
});

app.listen(3000, () => console.log('Order Service na porta 3000'));
