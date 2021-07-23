// Importar modelo
const Producto = require('../models/Producto.js')

// Crear
function create(request, response) {

    var params = request.body;
    console.log(params)

    var producto = new Producto();

    producto.NombreProducto = params.NombreProducto;
    producto.Inventario = params.Inventario;
    producto.PrecioVenta = params.PrecioVenta;
    producto.PrecioCompra = params.PrecioCompra;
    

    producto.save((error, productocreate) => {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en el servidor" })
        } else {
            response.status(200).send({ mensaje: "Producto almacenado" })
        }
    })
}

// Actualizar
function updateProducto(request, response) {

    var params = request.body;
    var idProducto = params.idProducto;

    console.log(idProducto)
    console.log(params)

    Producto.findByIdAndUpdate(idProducto, params, function(error, productoupdate) {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en el servidor" })
        } else {
            response.status(200).send({ mensaje: "Producto actualizado" })
        }
    })
}

// borrar

function deleteProducto(request, response) {

    var idProducto = request.body.idProducto;

    console.log(idProducto)


    Producto.findByIdAndDelete(idProducto, function(error,productodelete) {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en el servidor" })
        } else {
            response.status(200).send({ mensaje: "Producto eliminado"})
        }
    })
}

// Listar

function listar(request, response) {


    var filtro = request.body;

    Producto.find({}, (error, listaProducto) => {
        if (error) {
            response.status(500).send({ mensaje: "error en el servidor" })
        } else {
            response.status(200).send(listaProducto)
        }
    })
}

function listarProducto(request, response) {

    var idProducto = request.body.idProducto;

    Producto.find({_id:idProducto}, (error, listaProducto) => {
        if (error) {
            response.status(500).send({ mensaje: "error en el servidor" })
        } else {
            response.status(200).send(listaProducto)
        }
    })
}


module.exports = {
    create,
    updateProducto,
    deleteProducto,
    listar,
    listarProducto
}