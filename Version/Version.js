const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(["version 1","version 2","version 3"]);
});

module.exports = router;
