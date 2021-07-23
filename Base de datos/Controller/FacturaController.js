// Importar modelo
const Factura = require('../models/Factura.js')

// Crear
function createFactura(request, response) {
    
    var params = request.body;
    console.log(params)

    var factura = new Factura();

    factura.NumeroFactura = params.NumeroFactura;
    factura.FechaFactura = params.FechaFactura;
    factura.IdCliente = params.IdCliente;
    factura.IdProducto = params.IdProducto;
    factura.Unidades = params.Unidades;
    factura.TotalVenta = params.TotalVenta;


    factura.save((error, facturacreate) => {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en el servidor" })
        } else {
            response.status(200).send({ mensaje: "Factura  almacenado" })
        }
    })
}





// Actualizar
function updateFactura(request, response) {

    var params = request.body;
    var idFactura = params.idFactura;

    console.log(idFactura)
    console.log(params)

    Factura.findByIdAndUpdate(idFactura, params, function(error, Facturaupdate) {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en el servidor" })
        } else {
            response.status(200).send({ mensaje: "Factura  actualizado" })
        }
    })
}

// borrar

function deleteFactura(request, response) {

    var idFactura = request.body.idFactura;

    console.log(idFactura)


    Factura.findByIdAndDelete(idFactura, function(error, Facturadelete) {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en el servidor" })
        } else {
            response.status(200).send({ mensaje: "Factura eliminado" })
        }
    })
}

// Listar
function listarFactura(request, response) {

    var filtro = request.body;

    Factura.find({}, (error, listaFacturas) => {
        if (error) {
            response.status(500).send({ mensaje: "error en el servidor" })
        } else {
            response.status(200).send(listaFacturas)
        }
    })
}

module.exports = {
    createFactura,
    updateFactura,
    deleteFactura,
    listarFactura
}