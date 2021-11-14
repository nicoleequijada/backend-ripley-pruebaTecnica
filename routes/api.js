var express = require('express');
var router = express.Router();
var client = require('../controllers/client')
var transfer = require('../controllers/transfer')

/* GET users listing. */
router.post('/recipient', function(req, res, next) {
 
  client.newClient(req, res);

});
router.get('/recipient',function(req, res){
client.getClients(req,res);
})

router.post('/transfers', function(req, res){
  transfer.newTransfer(req, res)
})

module.exports = router;
 