const sql = require('mssql');
const {userName, password, server, database} = require('../Config')

// Database configuration
const config = {
  user: 'Welspun_Analytics',
  password: 'Welspun@123',
  server: '192.168.50.68',
  database: 'DB_MARKETING',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

console.log(userName, password, server, database )

module.exports = config ;