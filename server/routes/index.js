var express = require('express');
var router = express.Router();


// Server index.html page when request to the root is made
router.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname + "/../../client/" } );
});

module.exports = router;
