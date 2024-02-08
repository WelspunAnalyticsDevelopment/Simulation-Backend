const sql = require('mssql');
const {userName, password, server, database} = require('../Config')

// Database configuration
const config = {
  user: 'Sales_Simulation',
  password: 'Welspun@12345',
  server: '192.168.50.68',
  database: 'DB_MARKETING',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

console.log(userName, password, server, database )

module.exports = config ;