var config = require('../../dbconfig/dbconfig');
const  sql = require('mssql');


async function getSimulation() {
    try {
        let  pool = await  sql.connect(config);
        let  products = await  pool.request().query("SELECT * from SALESPLAN_SIMULATION");
        console.log(products);
        return  products.recordsets;
    } catch (error) {
      console.error('Error executing SQL query:', error);
      throw error; // You might want to handle or log the error accordingly
    }
  }
  
  module.exports =  getSimulation ;


