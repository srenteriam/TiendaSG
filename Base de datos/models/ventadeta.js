// Modelo de Datos

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var VentaDetalladaSchema = new Schema({
    idCliente: {type: Schema.ObjectId, ref:'cliente'},
    idProducto: {type: Schema.ObjectId, ref:'producto'},
    cantidad: Number,
    idventa: {type: Schema.ObjectId, ref:'venta'},
    FechaFactura: {type: Date, default:Date.now},
    PrecioVenta: Number,
    Total: Number,
    
})

module.exports = mongoose.model('ventadetallada', VentaDetalladaSchema)