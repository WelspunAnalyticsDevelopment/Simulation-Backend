const express = require('express');
const router = express.Router();

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
  
  res.json(dummyData);
});

module.exports = router;
