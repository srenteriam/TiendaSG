var bodyParser = require('body-parser');
api.use(bodyParser.json()); // support json encoded bodies
api.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Rutas Productos

const ProductoController = require('../Controller/ProductoController.js')
api.post('/create', function(request, response) {

    ProductoController.create(request, response)
})

api.post('/actualizar', function(request, response) {

    ProductoController.updateProducto(request, response)
})

api.post('/eliminar', function(request, response) {

    ProductoController.deleteProducto(request, response)
})

api.post('/listar', function(request, response) {

    ProductoController.listar(request, response)
})

api.post('/listarProducto', function(request, response) {

    ProductoController.listarProducto(request, response)
})

// Rutas Clientes

const ClienteController = require('../Controller/ClienteController.js')
api.post('/createcliente', function(request, response) {

    ClienteController.createCliente(request, response)
})

api.post('/actualizarcliente', function(request, response) {

    ClienteController.updateCliente(request, response)
})

api.post('/eliminarcliente', function(request, response) {

    ClienteController.deleteCliente(request, response)
})

api.post('/listarcliente', function(request, response) {

    ClienteController.listarCliente(request, response)
})

api.post('/listarclientei', function(request, response) {

    ClienteController.listarClientei(request, response)
})


//rutas Ventas

const VentaController = require('../Controller/VentaController.js')
api.post('/venta', function(request, response) {

    VentaController.registrar(request, response)
})

api.get('/datosventa/:id', function(request, response) {

    VentaController.datosVenta(request, response)
})

api.get('/listaventa', function(request, response) {

    VentaController.listaVenta(request, response)
})

api.get('/detallesventa/:id', function(request, response) {

    VentaController.detallesVenta(request, response)
})

api.post('/buscarventa', function(request, response) {

    VentaController.Buscarventa(request, response)
})

api.post('/eliminarventa', function(request, response) {

    VentaController.deleteVenta(request, response)
})

