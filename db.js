const { Pool } = require("pg");

// Конфигурация базы данных PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "your_database",
  password: "your_password",
  post: 5432,
});

module.exports = pool;