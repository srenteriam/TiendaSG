// Modelo de Datos

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var VentaSchema = new Schema({
    
    idCliente: {type: Schema.ObjectId, ref:'cliente'},
    FechaFactura: {type: Date, default:Date.now},
    
    
})

module.exports = mongoose.model('venta', VentaSchema)