const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Client = new Schema ({
        rut: { type: String, required: true },
        name: { type: String, required: true },
        email: { type: String, required: true },
        telefono: { type: String, required: true },
        bancoId: { type: String, required: true },
        type: { type: String, required: true },
        accountNumber: { type: String, required: true }
});

module.exports = mongoose.model('Client', Client)