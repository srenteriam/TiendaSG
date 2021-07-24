// Modelo de Datos

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var VentaDetalladaSchema = new Schema({
    
    idProducto: {type: Schema.ObjectId, ref:'Producto'},
    cantidad: Number,
    idventa: {type: Schema.ObjectId, ref:'venta'},
    precio: Number,
    
})

module.exports = mongoose.model('ventadetallada', VentaDetalladaSchema)