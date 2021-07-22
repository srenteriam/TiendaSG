// Modelo de Datos

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var FacturaSchema = new Schema({
    NumeroFactura: String,
    FechaFactura: String,
    IdCliente: String,
    Idproducto: String,
    Unidades: Number,
    TotalVenta: Number,

})

module.exports = mongoose.model('factura', FacturaSchema)