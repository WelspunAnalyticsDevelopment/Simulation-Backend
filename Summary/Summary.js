const express = require('express');
const {getSimulation,setSimulation, getChartSimulatedData}  = require('../Services/Simulation/Simulation');
const router = express.Router();

const jsonData  = require('../AppConfig/anjar.json');
const getDataDb = require('../AppConfig/getDataDB.json');
const { json } = require('body-parser');



//select statement to get the initial data from SALESPLAN_SIMULATION
router.get('/', (req, res) => {
  query=""
  console.log("selected product",req.query.selectedProduct);
  console.log("selected Level",req.query.selectedLevel);
    
  //if selected level is Customer Level    
  jsonData.map(({key,value}, index) => {
    if(index===0){
      query+=`Select TOP(20) ${key} as ${value},`
    }
    else if(index>0 && index !== jsonData.length-1){
      query+= `${key} as ${value},`
    }
    else{
    query+= `${key} as ${value} from SALESPLAN_SIMULATION WHERE [PRODUCT_CAT] = '${req.query.selectedProduct}' AND MERCHANT like '%KIRAN KOKANE%' OR TEAM_LEADER like '%KIRAN KOKANE%'`
    }
  })  
  console.log(query);

  getSimulation(query).then((data) => {

    res.json(data);

  })
  // res.json(null);
});


router.get('/getPublishedData', (req,res) => {
  console.log(req.query);
  let query = '';

  getDataDb.map(({key,value}, index) => {
    if(index===0){
      query+=`Select ${key} as ${value},`
    }
    else if(index>0 && index !== getDataDb.length-1){
      query+= `${key} as ${value},`
    }
    else{
     query+= `${key} as ${value} from SALESPLAN_PUBLISH WHERE [UNIQUE_IDENTIFICATION_NO] is not NULL AND [PRODUCT_CAT] = '${req.query.productName}' AND [TEAM_LEADER] like '%KIRAN KOKANE%' OR [VERSION_NO] like '%kiran_kokane%'`
    }
  })  
  // console.log(query);
  setSimulation(query).then((data) => {

    res.json(data);

  })
})






//querry to save a version in SIMULATION_OUTPUT.

router.post('/save-data', async(req, res) => {
  try {
    console.log("insert into Simulation output-------------------",req);
  var query=""
  
  jsonData.map(({key,value}, index) => {
    if(index===0){
      query+=`Insert INTO SIMULATION_OUTPUT ( [VERSION_NO] , ${key},`
    }
    else if(index > 0 && index !== jsonData.length-1){
      query+= `${key},`
    }
    else{
    query+= ` ${key}) Values`
    }
  })
    var summaryData = ""
     req.body.dataTableAnnual.map(({customerName , region , plant , thisYear},index)=>{
      if(index == 0 ){
       
        summaryData += `( '${req.body.textValue}-V-${req.body.numberValue}', '${customerName}' , '${thisYear.program}' , '${thisYear.productCat}' , '${plant}' , '${thisYear.uniqueIdentificationNo}' , '${thisYear.productSubCat}' , '${thisYear.teamLeader}' , '${region}' , ${thisYear.aprilSaleableUnit} , ${thisYear.aprilQuantity} ,${thisYear.aprilRate},${thisYear.aprilValue},${thisYear.aprilUSDN},${thisYear.maySaleableUnit}, ${thisYear.mayQuantity} ,${thisYear.mayRate},${thisYear.mayValue},${thisYear.mayUSDN},${thisYear.juneSaleableUnit}, ${thisYear.juneQuantity},${thisYear.juneRate},${thisYear.juneValue},${thisYear.juneUSDN},${thisYear.julySaleableUnit}, ${thisYear.julyQuantity},${thisYear.julyRate},${thisYear.julyValue},${thisYear.julyUSDN},${thisYear.augustSaleableUnit}, ${thisYear.augustQuantity} ,${thisYear.augustRate},${thisYear.augustValue},${thisYear.augustUSDN},${thisYear.septemberSaleableUnit}, ${thisYear.septemberQuantity} ,${thisYear.septemberRate},${thisYear.septemberValue},${thisYear.septemberUSDN},${thisYear.octoberSaleableUnit}, ${thisYear.octoberQuantity} ,${thisYear.octoberRate},${thisYear.octoberValue},${thisYear.octoberUSDN},${thisYear.novemberSaleableUnit}, ${thisYear.novemberQuantity} ,${thisYear.novemberRate},${thisYear.novemberValue},${thisYear.novemberUSDN},${thisYear.decemberSaleableUnit}, ${thisYear.decemberQuantity},${thisYear.decemberRate},${thisYear.decemberValue},${thisYear.decemberUSDN},${thisYear.januarySaleableUnit}, ${thisYear.januaryQuantity} ,${thisYear.januaryRate},${thisYear.januaryValue},${thisYear.januaryUSDN},${thisYear.februarySaleableUnit}, ${thisYear.februaryQuantity},${thisYear.februaryRate},${thisYear.februaryValue},${thisYear.februaryUSDN},${thisYear.marchSaleableUnit}, ${thisYear.marchQuantity} ,${thisYear.marchRate},${thisYear.marchValue}, ${thisYear.marchUSDN}),`
      }
      else if(index > 0 && index !== req.body.dataTableAnnual.length-1){
        summaryData+= `( '${req.body.textValue}-V-${req.body.numberValue}', '${customerName}' , '${thisYear.program}' , '${thisYear.productCat}' , '${plant}' , '${thisYear.uniqueIdentificationNo}' , '${thisYear.productSubCat}' , '${thisYear.teamLeader}' , '${region}' , ${thisYear.aprilSaleableUnit} , ${thisYear.aprilQuantity} ,${thisYear.aprilRate},${thisYear.aprilValue},${thisYear.aprilUSDN},${thisYear.maySaleableUnit}, ${thisYear.mayQuantity} ,${thisYear.mayRate},${thisYear.mayValue},${thisYear.mayUSDN},${thisYear.juneSaleableUnit}, ${thisYear.juneQuantity},${thisYear.juneRate},${thisYear.juneValue},${thisYear.juneUSDN},${thisYear.julySaleableUnit}, ${thisYear.julyQuantity},${thisYear.julyRate},${thisYear.julyValue},${thisYear.julyUSDN},${thisYear.augustSaleableUnit}, ${thisYear.augustQuantity} ,${thisYear.augustRate},${thisYear.augustValue},${thisYear.augustUSDN},${thisYear.septemberSaleableUnit}, ${thisYear.septemberQuantity} ,${thisYear.septemberRate},${thisYear.septemberValue},${thisYear.septemberUSDN},${thisYear.octoberSaleableUnit}, ${thisYear.octoberQuantity} ,${thisYear.octoberRate},${thisYear.octoberValue},${thisYear.octoberUSDN},${thisYear.novemberSaleableUnit}, ${thisYear.novemberQuantity} ,${thisYear.novemberRate},${thisYear.novemberValue},${thisYear.novemberUSDN},${thisYear.decemberSaleableUnit}, ${thisYear.decemberQuantity},${thisYear.decemberRate},${thisYear.decemberValue},${thisYear.decemberUSDN},${thisYear.januarySaleableUnit}, ${thisYear.januaryQuantity} ,${thisYear.januaryRate},${thisYear.januaryValue},${thisYear.januaryUSDN},${thisYear.februarySaleableUnit}, ${thisYear.februaryQuantity},${thisYear.februaryRate},${thisYear.februaryValue},${thisYear.februaryUSDN},${thisYear.marchSaleableUnit}, ${thisYear.marchQuantity} ,${thisYear.marchRate},${thisYear.marchValue}, ${thisYear.marchUSDN}),`
      }
      else{
      summaryData += `( '${req.body.textValue}-V-${req.body.numberValue}', '${customerName}' , '${thisYear.program}' , '${thisYear.productCat}' , '${plant}' , '${thisYear.uniqueIdentificationNo}' , '${thisYear.productSubCat}' , '${thisYear.teamLeader}' , '${region}' , ${thisYear.aprilSaleableUnit} , ${thisYear.aprilQuantity} ,${thisYear.aprilRate},${thisYear.aprilValue},${thisYear.aprilUSDN},${thisYear.maySaleableUnit}, ${thisYear.mayQuantity} ,${thisYear.mayRate},${thisYear.mayValue},${thisYear.mayUSDN},${thisYear.juneSaleableUnit}, ${thisYear.juneQuantity},${thisYear.juneRate},${thisYear.juneValue},${thisYear.juneUSDN},${thisYear.julySaleableUnit}, ${thisYear.julyQuantity},${thisYear.julyRate},${thisYear.julyValue},${thisYear.julyUSDN},${thisYear.augustSaleableUnit}, ${thisYear.augustQuantity} ,${thisYear.augustRate},${thisYear.augustValue},${thisYear.augustUSDN},${thisYear.septemberSaleableUnit}, ${thisYear.septemberQuantity} ,${thisYear.septemberRate},${thisYear.septemberValue},${thisYear.septemberUSDN},${thisYear.octoberSaleableUnit}, ${thisYear.octoberQuantity} ,${thisYear.octoberRate},${thisYear.octoberValue},${thisYear.octoberUSDN},${thisYear.novemberSaleableUnit}, ${thisYear.novemberQuantity} ,${thisYear.novemberRate},${thisYear.novemberValue},${thisYear.novemberUSDN},${thisYear.decemberSaleableUnit}, ${thisYear.decemberQuantity},${thisYear.decemberRate},${thisYear.decemberValue},${thisYear.decemberUSDN},${thisYear.januarySaleableUnit}, ${thisYear.januaryQuantity} ,${thisYear.januaryRate},${thisYear.januaryValue},${thisYear.januaryUSDN},${thisYear.februarySaleableUnit}, ${thisYear.februaryQuantity},${thisYear.februaryRate},${thisYear.februaryValue},${thisYear.februaryUSDN},${thisYear.marchSaleableUnit}, ${thisYear.marchQuantity} ,${thisYear.marchRate},${thisYear.marchValue}, ${thisYear.marchUSDN})`
      }
    })
    console.log(query,summaryData);
    setSimulation(query + summaryData).then((data) => {
      
      res.json(data);
  
    })

  } catch (error) {
    // console.error('Error saving data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//check duplicate publish versions

router.get('/already-published',async(req,res) => {
  
  var query = `SELECT COUNT(*) As total_count FROM SALESPLAN_PUBLISH WHERE [VERSION_NO] like '%${req.query.userName}%' AND [PRODUCT_CAT] like '%${req.query.product}%'`;
  console.log("check duplicate publish",query)
  setSimulation(query).then((data) => {
    
    console.log("data------", data.recordsets[0][0]["total_count"]);

    res.json(data.recordsets[0][0]["total_count"]);

  })
})

//publish data api

router.post('/publish-version',async(req,res) => {
  try {
    var query = '';
    // console.log(req);
    
    jsonData.map(({key,value}, index) => {
      if(index===0){
        query+=`Insert INTO SALESPLAN_PUBLISH ( [VERSION_NO] , ${key},`
      }
      else if(index > 0 && index !== jsonData.length-1){
        query+= `${key},`
      }
      else{
      query+= ` ${key}) Values`
      }
    })

    var summaryData = ""
     req.body.dataTableAnnual.map(({customerName, thisYear},index)=>{
      if(index == 0 ){
       
        summaryData += `( '${req.body.publishVersion}', '${customerName}' , '${thisYear.program}' , '${thisYear.productCat}' , '${thisYear.plant}' , '${thisYear.uniqueIdentificationNo}' , '${thisYear.productSubCat}' , '${thisYear.teamLeader}' , '${thisYear.region}' , ${thisYear.aprilSaleableUnit} , ${thisYear.aprilQuantity} ,${thisYear.aprilRate},${thisYear.aprilValue},${thisYear.aprilUSDN},${thisYear.maySaleableUnit}, ${thisYear.mayQuantity} ,${thisYear.mayRate},${thisYear.mayValue},${thisYear.mayUSDN},${thisYear.juneSaleableUnit}, ${thisYear.juneQuantity},${thisYear.juneRate},${thisYear.juneValue},${thisYear.juneUSDN},${thisYear.julySaleableUnit}, ${thisYear.julyQuantity},${thisYear.julyRate},${thisYear.julyValue},${thisYear.julyUSDN},${thisYear.augustSaleableUnit}, ${thisYear.augustQuantity} ,${thisYear.augustRate},${thisYear.augustValue},${thisYear.augustUSDN},${thisYear.septemberSaleableUnit}, ${thisYear.septemberQuantity} ,${thisYear.septemberRate},${thisYear.septemberValue},${thisYear.septemberUSDN},${thisYear.octoberSaleableUnit}, ${thisYear.octoberQuantity} ,${thisYear.octoberRate},${thisYear.octoberValue},${thisYear.octoberUSDN},${thisYear.novemberSaleableUnit}, ${thisYear.novemberQuantity} ,${thisYear.novemberRate},${thisYear.novemberValue},${thisYear.novemberUSDN},${thisYear.decemberSaleableUnit}, ${thisYear.decemberQuantity},${thisYear.decemberRate},${thisYear.decemberValue},${thisYear.decemberUSDN},${thisYear.januarySaleableUnit}, ${thisYear.januaryQuantity} ,${thisYear.januaryRate},${thisYear.januaryValue},${thisYear.januaryUSDN},${thisYear.februarySaleableUnit}, ${thisYear.februaryQuantity},${thisYear.februaryRate},${thisYear.februaryValue},${thisYear.februaryUSDN},${thisYear.marchSaleableUnit}, ${thisYear.marchQuantity} ,${thisYear.marchRate},${thisYear.marchValue}, ${thisYear.marchUSDN}),`
      }
      else if(index > 0 && index !== req.body.dataTableAnnual.length-1){
        summaryData+= `( '${req.body.publishVersion}', '${customerName}' , '${thisYear.program}' , '${thisYear.productCat}' , '${thisYear.plant}' , '${thisYear.uniqueIdentificationNo}' , '${thisYear.productSubCat}' , '${thisYear.teamLeader}' , '${thisYear.region}' , ${thisYear.aprilSaleableUnit} , ${thisYear.aprilQuantity} ,${thisYear.aprilRate},${thisYear.aprilValue},${thisYear.aprilUSDN},${thisYear.maySaleableUnit}, ${thisYear.mayQuantity} ,${thisYear.mayRate},${thisYear.mayValue},${thisYear.mayUSDN},${thisYear.juneSaleableUnit}, ${thisYear.juneQuantity},${thisYear.juneRate},${thisYear.juneValue},${thisYear.juneUSDN},${thisYear.julySaleableUnit}, ${thisYear.julyQuantity},${thisYear.julyRate},${thisYear.julyValue},${thisYear.julyUSDN},${thisYear.augustSaleableUnit}, ${thisYear.augustQuantity} ,${thisYear.augustRate},${thisYear.augustValue},${thisYear.augustUSDN},${thisYear.septemberSaleableUnit}, ${thisYear.septemberQuantity} ,${thisYear.septemberRate},${thisYear.septemberValue},${thisYear.septemberUSDN},${thisYear.octoberSaleableUnit}, ${thisYear.octoberQuantity} ,${thisYear.octoberRate},${thisYear.octoberValue},${thisYear.octoberUSDN},${thisYear.novemberSaleableUnit}, ${thisYear.novemberQuantity} ,${thisYear.novemberRate},${thisYear.novemberValue},${thisYear.novemberUSDN},${thisYear.decemberSaleableUnit}, ${thisYear.decemberQuantity},${thisYear.decemberRate},${thisYear.decemberValue},${thisYear.decemberUSDN},${thisYear.januarySaleableUnit}, ${thisYear.januaryQuantity} ,${thisYear.januaryRate},${thisYear.januaryValue},${thisYear.januaryUSDN},${thisYear.februarySaleableUnit}, ${thisYear.februaryQuantity},${thisYear.februaryRate},${thisYear.februaryValue},${thisYear.februaryUSDN},${thisYear.marchSaleableUnit}, ${thisYear.marchQuantity} ,${thisYear.marchRate},${thisYear.marchValue}, ${thisYear.marchUSDN}),`
      }
      else{
      summaryData += `( '${req.body.publishVersion}', '${customerName}', '${thisYear.program}' , '${thisYear.productCat}' , '${thisYear.plant}' , '${thisYear.uniqueIdentificationNo}' , '${thisYear.productSubCat}' , '${thisYear.teamLeader}', '${thisYear.region}' , ${thisYear.aprilSaleableUnit} , ${thisYear.aprilQuantity} ,${thisYear.aprilRate},${thisYear.aprilValue},${thisYear.aprilUSDN},${thisYear.maySaleableUnit}, ${thisYear.mayQuantity} ,${thisYear.mayRate},${thisYear.mayValue},${thisYear.mayUSDN},${thisYear.juneSaleableUnit}, ${thisYear.juneQuantity},${thisYear.juneRate},${thisYear.juneValue},${thisYear.juneUSDN},${thisYear.julySaleableUnit}, ${thisYear.julyQuantity},${thisYear.julyRate},${thisYear.julyValue},${thisYear.julyUSDN},${thisYear.augustSaleableUnit}, ${thisYear.augustQuantity} ,${thisYear.augustRate},${thisYear.augustValue},${thisYear.augustUSDN},${thisYear.septemberSaleableUnit}, ${thisYear.septemberQuantity} ,${thisYear.septemberRate},${thisYear.septemberValue},${thisYear.septemberUSDN},${thisYear.octoberSaleableUnit}, ${thisYear.octoberQuantity} ,${thisYear.octoberRate},${thisYear.octoberValue},${thisYear.octoberUSDN},${thisYear.novemberSaleableUnit}, ${thisYear.novemberQuantity} ,${thisYear.novemberRate},${thisYear.novemberValue},${thisYear.novemberUSDN},${thisYear.decemberSaleableUnit}, ${thisYear.decemberQuantity},${thisYear.decemberRate},${thisYear.decemberValue},${thisYear.decemberUSDN},${thisYear.januarySaleableUnit}, ${thisYear.januaryQuantity} ,${thisYear.januaryRate},${thisYear.januaryValue},${thisYear.januaryUSDN},${thisYear.februarySaleableUnit}, ${thisYear.februaryQuantity},${thisYear.februaryRate},${thisYear.februaryValue},${thisYear.februaryUSDN},${thisYear.marchSaleableUnit}, ${thisYear.marchQuantity} ,${thisYear.marchRate},${thisYear.marchValue}, ${thisYear.marchUSDN})`
      }
    })
    console.log("Insert Into Publish table",query,summaryData);
    setSimulation(query + summaryData).then((data) => {
      
      res.json(data);
  
    })
  }
  catch(error){
    console.log('error',error);
  }

})








// Get Saved simulated data 

//get version list

router.get("/getVersion",(req,res) => {
  console.log(req.query);
  // var query = `SELECT [VERSION_NO] FROM SIMULATION_OUTPUT where [VERSION_NO] like '%${req.query.userName}%' AND [PRODUCT_CAT] like '%${req.query.product}%' GROUP BY [VERSION_NO]`
  var query = `Select Distinct td.VERSION_NO,
                  (CASE
                    WHEN sp.VERSION_NO IS NULL THEN 0
                    Else 1
                  END) as isPublished
                from SALESPLAN_PUBLISH sp right join SIMULATION_OUTPUT td on  sp.VERSION_NO = td.VERSION_NO
                where td.VERSION_NO like '%${req.query.userName}%' AND td.PRODUCT_CAT like '%${req.query.product}%' GROUP BY td.VERSION_NO, sp.VERSION_NO`
  console.log(query);
  // console.log(query)

  setSimulation(query).then((data) => {
    // console.log(data);
    res.json(data.recordset);
  })
})


router.get("/savedSimulatedData",(req,res)=> {
  // console.log("version name---------- ",req.query);
  var query = ""
  jsonData.map(({key,value}, index) => {
    if(index===0){
      query+=`Select ${key} as ${value},`
    }
    else if(index>0 && index !== jsonData.length-1){
      query+= `${key} as ${value},`
    }
    else{
      query+= `${key} as ${value} from SIMULATION_OUTPUT WHERE [VERSION_NO] = '${req.query.version}'`

    }
    // console.log("querry---->",query);

  })

  getSimulation(query).then((data) => {

    res.json(data);

  })

})


router.get("/checkDuplicateVersion", (req, res) => {
  
  // Access query parameters using req.query
  // console.log("UserName ",req.query.textValue)
  // console.log("Number value", req.query.numberValue);
  var query = `SELECT COUNT(*) As total_count FROM SIMULATION_OUTPUT WHERE [VERSION_NO] = '${req.query.textValue}-V-${req.query.numberValue}'`;
  
  setSimulation(query).then((data) => {
    
    // console.log("data------", data.recordsets[0][0]["total_count"]);

    res.json(data.recordsets[0][0]["total_count"]);

  })
});








// API to get chart Data

router.get("/chartsData",(req,res) => {

  var query = `select Sum([APRIL_VALUE] + [MAY_VALUE] + [JUNE_VALUE] + [JULY_VALUE] + [AUG_VALUE] + [SEPT_VALUE] + [OCT_(VALUE)] + [NOV_VALUE] + [DEC_VALUE] + [JAN_VALUE] + [FEB_VALUE] + [MAR_VALUE]) as 'totalValue', [REGION] from SIMULATION_OUTPUT where [VERSION_NO] = '${req.query.version}' group by [REGION]` 

  console.log("query to get pie-chart data :- ",query);
  
  getChartSimulatedData(query).then((data) => {

    res.json(data);
    console.log(data);

  })

})

router.get("/pieChartCustomer",(req,res)=>{

  var query = `
select Sum([APRIL_VALUE] + [MAY_VALUE] + [JUNE_VALUE] + [JULY_VALUE] + [AUG_VALUE] + [SEPT_VALUE] + [OCT_(VALUE)] + [NOV_VALUE] + [DEC_VALUE] + [JAN_VALUE] + [FEB_VALUE] + [MAR_VALUE]) as 'totalValue', [END_CUSTOMER_NAME] as 'endCustomerName' from SIMULATION_OUTPUT where [VERSION_NO] = '${req.query.version}' group by [END_CUSTOMER_NAME]`

  // console.log("get pie chart data for customers ---------",query)
  
  getChartSimulatedData(query).then((data) => {

    res.json(data);
    console.log(data);

  })

})

router.get("/barCharData",(req,res) => {

  var query = `with NEW_SIMULATION_OUTPUT AS (
    select * from SIMULATION_OUTPUT where [VERSION_NO] = '${req.query.version}'
   )
   SELECT 
      
       SUM(old.[APR_(SALEABLE_UNITS)]) AS old_apr_saleableUnit,
       SUM(new.[APR_(SALEABLE_UNITS)]) AS new_apr_saleableUnit,
       SUM(old.[APRIL_VALUE]) AS old_apr_value,
       SUM(new.[APRIL_VALUE]) AS new_apr_value,
       SUM(old.[MAY_(SALEABLE_UNITS)]) AS old_may_saleableUnit,
       SUM(new.[MAY_(SALEABLE_UNITS)]) AS new_may_saleableUnit,
       SUM(old.[MAY_VALUE]) AS old_may_value,
       SUM(new.[MAY_VALUE]) AS new_may_value,
       SUM(old.[JUN_(SALEABLE_UNITS)]) AS old_jun_saleableUnit,
       SUM(new.[JUN_(SALEABLE_UNITS)]) AS new_jun_saleableUnit,
       SUM(old.[JUNE_VALUE]) AS old_jun_value,
       SUM(new.[JUNE_VALUE]) AS new_jun_value,
       SUM(old.[JULY_(SALEABLE_UNITS)]) AS old_july_saleableUnit,
       SUM(new.[JULY_(SALEABLE_UNITS)]) AS new_july_saleableUnit,
       SUM(old.[JULY_VALUE]) AS old_july_value,
       SUM(new.[JULY_VALUE]) AS new_july_value,
       SUM(old.[AUGUST_(SALEABLE_UNITS)]) AS old_aug_saleableUnit,
       SUM(new.[AUGUST_(SALEABLE_UNITS)]) AS new_aug_saleableUnit,
       SUM(old.[AUG_VALUE]) AS old_aug_value,
       SUM(new.[AUG_VALUE]) AS new_aug_value,
       SUM(old.[SEP_(SALEABLE_UNITS)]) AS old_sep_saleableUnit,
       SUM(new.[SEP_(SALEABLE_UNITS)]) AS new_sep_saleableUnit,
       SUM(old.[SEPT_VALUE]) AS old_sep_value,
       SUM(new.[SEPT_VALUE]) AS new_sep_value,
       SUM(old.[OCT_(SALEABLE_UNIT)]) AS old_oct_saleableUnit,
       SUM(new.[OCT_(SALEABLE_UNIT)]) AS new_oct_saleableUnit,
       SUM(old.[OCT_(VALUE)]) AS old_oct_value,
       SUM(new.[OCT_(VALUE)]) AS new_oct_value,
       SUM(old.[NOVEMBER_(SALEABLE_UNITS)]) AS old_nov_saleableUnit,
       SUM(new.[NOVEMBER_(SALEABLE_UNITS)]) AS new_nov_saleableUnit,
       SUM(old.[NOV_VALUE]) AS old_nov_value,
       SUM(new.[NOV_VALUE]) AS new_nov_value,
       SUM(old.[DECEMBER_(SALEABLE_UNITS)]) AS old_dec_saleableUnit,
       SUM(new.[DECEMBER_(SALEABLE_UNITS)]) AS new_dec_saleableUnit,
       SUM(old.[DEC_VALUE]) AS old_dec_value,
       SUM(new.[DEC_VALUE]) AS new_dec_value,
       SUM(old.[JANUARY_(SALEABLE_UNITS)]) AS old_jan_saleableUnit,
       SUM(new.[JANUARY_(SALEABLE_UNITS)]) AS new_jan_saleableUnit,
       SUM(old.[JAN_VALUE]) AS old_jan_value,
       SUM(new.[JAN_VALUE]) AS new_jan_value,
       SUM(old.[FEBRUARY_(SALEABLE_UNITS)]) AS old_feb_saleableUnit,
       SUM(new.[FEBRUARY_(SALEABLE_UNITS)]) AS new_feb_saleableUnit,
       SUM(old.[FEB_VALUE]) AS old_feb_value,
       SUM(new.[FEB_VALUE]) AS new_feb_value,
       SUM(old.[MARCH_(SALEABLE_UNITS)]) AS old_mar_saleableUnit,
       SUM(new.[MARCH_(SALEABLE_UNITS)]) AS new_mar_saleableUnit,
       SUM(old.[MAR_VALUE]) AS old_mar_value,
       SUM(new.[MAR_VALUE]) AS new_mar_value
     
   FROM 
       SALESPLAN_SIMULATION AS old
   INNER JOIN 
       NEW_SIMULATION_OUTPUT AS new 
   ON 
       old.unique_identification_no = new.unique_identification_no
   GROUP BY
       old.plant;
   `;
   
   getChartSimulatedData(query).then((data) => {

    const oldValues = []
    const newValues = []
    const oldSaleableUnit = []
    const newSaleableUnit = []

    data.forEach((item)=>{

      Object.keys(item).forEach((key => {
        if(key.startsWith("old_") && key.endsWith("_value")){
          oldValues.push(item[key]); 
        }
      }));
      
      Object.keys(item).forEach((key => {
        if(key.startsWith("new_") && key.endsWith("_value")){
          newValues.push(item[key]);
        }
      }));

      Object.keys(item).forEach((key => {
        if(key.startsWith("old_") && key.endsWith("_saleableUnit")){
          oldSaleableUnit.push(item[key]); 
        }
      }));

      
      Object.keys(item).forEach((key => {
        if(key.startsWith("new_") && key.endsWith("_saleableUnit")){
          newSaleableUnit.push(item[key]); 
        }
      }));
      console.log("oldValues", oldValues);
      console.log("newValues",newValues);
     
    });
    res.json({"oldValues" : oldValues, "newValues": newValues , "oldSaleableUnit": oldSaleableUnit , "newSaleableUnit": newSaleableUnit});
    
  });
});


module.exports = router;