var config = require('../../dbconfig/dbconfig');
const  sql = require('mssql');


async function getSimulation(sqlStatment) {
    try {
        let  pool = await  sql.connect(config);
        let  result = await  pool.request().query(sqlStatment);
        // console.log(products);
        data = result.recordsets[0].map((data) => {
          const customerName = data.customerName
          delete data.customerName
          return({
            customerName: customerName,
            lastYear: data,
            thisYear:data
          })
        })
        console.log(data, "data*******************")
        return  data;
    } catch (error) {
      console.error('Error executing SQL query:', error);
      throw error; // You might want to handle or log the error accordingly
    }
  }
  
  module.exports =  getSimulation ;


