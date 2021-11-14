const path = require('path');
const Shark = require('../models/sharks');

exports.index = function (req, res) {
  res.sendFile(path.resolve('views/sharks.html'));
};

exports.create = function (req, res) {
  var newShark = new Shark(req.body);
  console.log(req.body);
  newShark.save(function (err) {
    if(err) {
      res.status(400).send('Unable to save shark to database');
    } else {
      res.redirect('/sharks/getshark');
    }
  });
};

exports.list = function (req, res) {
  Shark.find({}).exec(function (err, sharks) {
    if (err) {
      return res.send(500, err);
    }
    res.render('getshark', {
      sharks: sharks
    });
  });
};


// como se crea una entrada en la DB
exports.newShark = function (req, res){
  // se crea objeto del tipo de modelo, en este caso el modelo es Shark
  const loquesea = new Shark(req.body)
  // se guardar llamando al metodo .save()
  loquesea.save((error)=>{
    if(error){
      console.log(`se produjo un error ${error}`)
      res.send(500, error)
    }
    else{
      res.send(200, "se creo exitosamente")
    }
  })
}






