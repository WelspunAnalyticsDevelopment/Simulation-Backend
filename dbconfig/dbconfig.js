const sql = require('mssql');
const {userName, password, server, database} = require('../Config')

// Database configuration
const config = {
  user: 
  password: 
  server: 
  database: 'DB_MARKETING',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

console.log(userName, password, server, database )

module.exports = config ;