const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Transfer = new Schema ({
    name: { type: String, required: true },
    rut: { type: String, required: true },
    email: { type: String, required: true },
    telefono: { type: String, required: true },
    accountNumber: { type: String, required: true },
    type: { type: String, required: true },
    bancoId: { type: String, required: true },
    monto: { type: String, required: true }
    

   
});

module.exports = mongoose.model('Transfer', Transfer)