// config.js


require('dotenv').config();

const apiHost = process.env.REACT_APP_API_HOST || 'http://localhost:3031';
const otherSetting = process.env.REACT_APP_OTHER_SETTING || 3000;

module.exports = { apiHost, otherSetting };
