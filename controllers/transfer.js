const Transfer = require('../models/transfer');

exports.newTransfer = function (req, res){
    const newTransfer = new Transfer(req.body)
    newTransfer.save((error)=>{
        if(error){
          console.log(`se produjo un error ${error}`)
          res.send(500, error)
        }
        else{
          res.send(200, "se creo exitosamente")
        }
      })
}