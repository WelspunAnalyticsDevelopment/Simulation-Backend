// config.js


require('dotenv').config();

const apiHost = process.env.REACT_APP_API_HOST || 'http://localhost:3031';
const otherSetting = process.env.REACT_APP_OTHER_SETTING || 3000;

const host = process.env.host || 3031;
const userName = process.env.userName || null;
const password = process.env.password || null
const server= process.env.server || null;
const database = process.env.database ||  'DB_MARKETING';


module.exports = { apiHost, otherSetting, userName, password, server, database };
