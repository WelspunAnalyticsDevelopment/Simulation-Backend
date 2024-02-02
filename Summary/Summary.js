const express = require('express');
const getSimulation  = require('../Services/Simulation/Simulation');
const router = express.Router();
// import { pool } from "mssql";

const jsonData  = require('../AppConfig/anjar.json');

const dummyData = [
  {customerName: "Costco",
  lastYear : {
    aprilSaleableUnit: 100,
    aprilRate: 3000,
    aprilValue: 4000,
    aprilUSDN: 5000,
   
    maySaleableUnit: 600,
    mayRate: 700,
    mayValue: 4000,
    mayUSDN: 5000,

    juneSaleableUnit: 200,
    juneRate: 400,
    juneValue: 4000,
    juneUSDN : 5000,
  
    julySaleableUnit: 200,
    julyRate: 400,
    julyValue: 4000,
    julyUSDN : 5000,
  
    augustSaleableUnit: 200,
    augustRate: 400,
    augustValue: 4000,
    augustUSDN : 5000,
  
    septemberSaleableUnit: 200,
    septemberRate: 400,
    septemberValue: 4000,
    septemberUSDN : 5000,
  
    octoberSaleableUnit: 200,
    octoberRate: 400,
    octoberValue: 4000,
    octoberUSDN: 5000,

    novemberSaleableUnit: 200,
    novemberRate: 400,
    novemberValue: 4000,
    novemberUSDN:5000,
   
    decemberSaleableUnit: 200,
    decemberRate: 400,
    decemberValue: 4000,
    decemberUSDN:5000,
  
    januarySaleableUnit: 200,
    januaryRate: 400,
    januaryValue: 4000,
    januaryUSDN:5000,
  
    februarySaleableUnit: 200,
    februaryRate: 400,
    februaryValue: 4000,
    februaryUSDN: 5000,
  
    marchSaleableUnit: 200,
    marchRate: 400,
    marchValue: 4000,
    marchUSDN:5000

  },
  thisYear: {
    aprilSaleableUnit: 1900,
    aprilRate: 3040,
    aprilValue: 4000,
    aprilUSDN: 5000,
   
    maySaleableUnit: 600,
    mayRate: 700,
    mayValue: 4000,
    mayUSDN: 5000,

    juneSaleableUnit: 200,
    juneRate: 400,
    juneValue: 4000,
    juneUSDN : 5000,
  
    julySaleableUnit: 200,
    julyRate: 400,
    julyValue: 4000,
    julyUSDN : 5000,
  
    augustSaleableUnit: 200,
    augustRate: 400,
    augustValue: 4000,
    augustUSDN : 5000,
  
    septemberSaleableUnit: 200,
    septemberRate: 400,
    septemberValue: 4000,
    septemberUSDN : 5000,
  
    octoberSaleableUnit: 200,
    octoberRate: 400,
    octoberValue: 4000,
    octoberUSDN: 5000,

    novemberSaleableUnit: 200,
    novemberRate: 400,
    novemberValue: 4000,
    novemberUSDN:5000,
   
    decemberSaleableUnit: 200,
    decemberRate: 400,
    decemberValue: 4000,
    decemberUSDN:5000,
  
    januarySaleableUnit: 200,
    januaryRate: 400,
    januaryValue: 4000,
    januaryUSDN: 5000,
  
    februarySaleableUnit: 200,
    februaryRate: 400,
    februaryValue: 4000,
    februaryUSDN: 5000,
  
    marchSaleableUnit: 200,
    marchRate: 400,
    marchValue: 4000,
    marchUSDN:5000

  }
},
{
  customerName: "Walmart",
  lastYear: {
    aprilSaleableUnit: 100,
    aprilRate: 3000,
    aprilValue: 4000,
    aprilUSDN: 5000,
   
    maySaleableUnit: 600,
    mayRate: 700,
    mayValue: 4000,
    mayUSDN: 5000,

    juneSaleableUnit: 200,
    juneRate: 400,
    juneValue: 4000,
    juneUSDN : 5000,
  
    julySaleableUnit: 200,
    julyRate: 400,
    julyValue: 4000,
    julyUSDN : 5000,
  
    augustSaleableUnit: 200,
    augustRate: 400,
    augustValue: 4000,
    augustUSDN : 5000,
  
    septemberSaleableUnit: 200,
    septemberRate: 400,
    septemberValue: 4000,
    septemberUSDN : 5000,
  
    octoberSaleableUnit: 200,
    octoberRate: 400,
    octoberValue: 4000,
    octoberUSDN: 5000,

    novemberSaleableUnit: 200,
    novemberRate: 400,
    novemberValue: 4000,
    novemberUSDN:5000,
   
    decemberSaleableUnit: 200,
    decemberRate: 400,
    decemberValue: 4000,
    decemberUSDN:5000,
  
    januarySaleableUnit: 200,
    januaryRate: 400,
    januaryValue: 4000,
    januaryUSDN: 5000,
  
    februarySaleableUnit: 200,
    februaryRate: 400,
    februaryValue: 4000,
    februaryUSDN: 5000,
  
    marchSaleableUnit: 200,
    marchRate: 400,
    marchValue: 4000,
    marchUSDN:5000

  },
  thisYear: {
    aprilSaleableUnit: 100,
    aprilRate: 3000,
    aprilValue: 4000,
    aprilUSDN: 5000,
   
    maySaleableUnit: 600,
    mayRate: 700,
    mayValue: 4000,
    mayUSDN: 5000,

    juneSaleableUnit: 200,
    juneRate: 400,
    juneValue: 4000,
    juneUSDN : 5000,
  
    julySaleableUnit: 200,
    julyRate: 400,
    julyValue: 4000,
    julyUSDN : 5000,
  
    augustSaleableUnit: 200,
    augustRate: 400,
    augustValue: 4000,
    augustUSDN : 5000,
  
    septemberSaleableUnit: 200,
    septemberRate: 400,
    septemberValue: 4000,
    septemberUSDN : 5000,
  
    octoberSaleableUnit: 200,
    octoberRate: 400,
    octoberValue: 4000,
    octoberUSDN: 5000,

    novemberSaleableUnit: 200,
    novemberRate: 400,
    novemberValue: 4000,
    novemberUSDN:5000,
   
    decemberSaleableUnit: 200,
    decemberRate: 400,
    decemberValue: 4000,
    decemberUSDN:5000,
  
    januarySaleableUnit: 200,
    januaryRate: 400,
    januaryValue: 4000,
    januaryUSDN: 34000,
  
    februarySaleableUnit: 200,
    februaryRate: 400,
    februaryValue: 4000,
    februaryUSDN: 5000,
  
    marchSaleableUnit: 200,
    marchRate: 400,
    marchValue: 4000,
    marchUSDN:5000

  }
}
]

router.get('/', (req, res) => {
  query=""
  jsonData.map(({key,value}, index) => {
    if(index===0){
      query+=`Select TOP(10) ${key} as ${value},`
    }
    else if(index>0 && index !== jsonData.length-1){
      query+= `${key} as ${value},`
    }
    else{
     query+= `${key} as ${value} from SALESPLAN_SIMULATION WHERE [UNIQUE_IDENTIFICATION_NO] is not NULL`
    }
  })

  getSimulation(query).then((data) => {

    // console.log(data)
    res.json(data);

  })
});


module.exports = router;