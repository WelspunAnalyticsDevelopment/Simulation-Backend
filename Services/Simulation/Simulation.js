var config = require('../../dbconfig/dbconfig');
const  sql = require('mssql');


async function getSimulation(sqlStatment) {
    try {
        let  pool = await  sql.connect(config);
        let  result = await  pool.request().query(sqlStatment);
        data = result.recordsets[0].map((data) => {
          const customerName = data.customerName
          const plant = data.plant
          const region = data.region
          const program = data.program
        
          delete data.customerName
          delete data.plant
          delete data.region
          delete data.program
          return({
            customerName: customerName,
            plant: plant,
            region: region,
            program: program,
            lastYear: data,
            thisYear: data
          })
        })
        return  data;
    } catch (error) {
      console.error('Error executing SQL query:', error);
      throw error; // You might want to handle or log the error accordingly
    }
  }

  async function getChartSimulatedData(sqlStatment) {
    try {
        let  pool = await  sql.connect(config);
        let  result = await  pool.request().query(sqlStatment);

        return  result.recordsets[0];
    } catch (error) {
      console.error('Error executing SQL query:', error);
      throw error; // You might want to handle or log the error accordingly
    }
  }

  async function setSimulation(sqlStatment) {
    try {
       
        let  pool = await  sql.connect(config);
        let  result = await  pool.request().query(sqlStatment);

        return result;
    } catch (error) {
      console.error('Error executing SQL query:', error);
      throw error; // You might want to handle or log the error accordingly
    }
  }
  
  module.exports =  {getSimulation, setSimulation , getChartSimulatedData} ;


