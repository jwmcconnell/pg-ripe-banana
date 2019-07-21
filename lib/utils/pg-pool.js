/* eslint-disable no-console */
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  database: 'ripe_banana_db',
  user: 'jackadmin',
  password: 'Jg*61K5l6LOZ'
});

pool.on('connect', () => {
  console.log('connected');
});

pool.on('error', () => {
  console.log('connection error');
});

pool.connect();

module.exports = pool;
