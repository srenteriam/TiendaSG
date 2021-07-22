// Modelo de Datos

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var ClienteSchema = new Schema({
    Nombre: String,
    Apellido: String,
    FechaNacimiento: Number,
    Telefono: Number,
    Edad: Number,

})

module.exports = mongoose.model('cliente', ClienteSchema)