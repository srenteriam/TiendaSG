// Modelo de Datos

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var FacturaSchema = new Schema({
    NumeroFactura: Number,
    FechaFactura: {type: Date, default:Date.now},
    IdCliente: {type: Schema.ObjectId, ref:'Cliente'},
    IdProducto: {type: Schema.ObjectId, ref:'Producto'},
    Unidades: Number,
    TotalVenta: Number,

})

module.exports = mongoose.model('factura', FacturaSchema)