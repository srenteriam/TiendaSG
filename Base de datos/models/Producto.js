// Modelo de Datos

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var ProductoSchema = new Schema({
    NombreProducto: String,
    Inventario: Number,
    PrecioVenta: Number,
    PrecioCompra: Number,
})

module.exports = mongoose.model('producto',ProductoSchema)