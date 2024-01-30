// config.js


require('dotenv').config();

const apiHost = process.env.REACT_APP_API_HOST || 'http://localhost:3031';
const otherSetting = process.env.REACT_APP_OTHER_SETTING || 3000;

const host = process.env.host || 3031;
const userName = 
const password = process.env.password || 
const server= process.env.server || 
const database = process.env.database ||  'DB_MARKETING';


module.exports = { apiHost, otherSetting, userName, password, server, database };
