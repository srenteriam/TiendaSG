// Importar modelo
const Cliente = require('../models/Cliente.js')

// Crear
function crearCliente(request, response) {

    var params = request.body;
    console.log(params)

    var cliente = new Cliente();

    cliente.nombre = params.nombre;
    cliente.Apellido = params.Apellido;
    cliente.FechaNacimiento = params.FechaNacimiento;
    cliente.Telefono = params.Telefono;
    cliente.Edad = params.Edad;


    cliente.save((error, clientecreate) => {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en el servidor" })
        } else {
            response.status(200).send({ mensaje: "Cliente  almacenado" })
        }
    })
}

// Actualizar
function updateCliente(request, response) {

    var params = request.body;
    var idCliente = params.idCliente;

    console.log(idCliente)
    console.log(params)

    Cliente.findByIdAndUpdate(idCliente, params, function(error, clienteupdate) {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en el servidor" })
        } else {
            response.status(200).send({ mensaje: "Cliente  actualizado" })
        }
    })
}

// borrar

function deleteCliente(request, response) {

    var idCliente = request.body.idCliente;

    console.log(idCliente)


    Cliente.findByIdAndDelete(idCliente, function(error, clientedelete) {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en el servidor" })
        } else {
            response.status(200).send({ mensaje: "Cliente eliminado" })
        }
    })
}

// Listar
function listarCliente(request, response) {

    var filtro = request.body;

    Cliente.find({}, (error, listaclientes) => {
        if (error) {
            response.status(500).send({ mensaje: "error en el servidor" })
        } else {
            response.status(200).send(listaclientes)
        }
    })
}

module.exports = {
    crearCliente,
    updateCliente,
    deleteCliente,
    listarCliente
}