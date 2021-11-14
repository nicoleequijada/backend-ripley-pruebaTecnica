const Client = require('../models/client');

exports.newClient = function (req, res){
  const clientModel = new Client(req.body)
  clientModel.save((error)=>{
    if(error){
      console.log(`se produjo un error ${error}`)
      res.send(500, error)
    }
    else{
      res.send(200, "se creo exitosamente")
    }
  })
}

exports.getClients = function (req, res){
  Client.find({}).exec(function(error, clients ){
    if(error){
      return res.send(500, err);
    }else{
      res.send(200, clients)
    }
  })
}