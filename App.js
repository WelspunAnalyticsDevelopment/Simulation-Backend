const express = require('express');
const bodyParser = require('body-parser');
const {host } = require('./Config'); // Update the path accordingly
const app = express();
const cors = require('cors');


const versionRoutes = require('./Version/Version');
const summaryRoutes = require('./Summary/Summary');
const simulationRoutes = require('./Simulation/Simulation');
const { get } = require('http');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.listen(host || 3031, () => {
  console.log(`Server is running on port ${host || 3031}`);
});


app.use('/version',versionRoutes);

app.use('/summary',summaryRoutes);

app.use('/simulation',simulationRoutes);

app.post('/simulation', (req, res) => {
  const postData = req.body;
  res.status(201).json({ message: 'post created successfully', data: postData });
});

      

