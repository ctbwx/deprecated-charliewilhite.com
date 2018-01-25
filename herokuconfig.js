require('dotenv').config({ path: './env.env' });
module.exports = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  ssl: true,
  database: process.env.DATABASE
}