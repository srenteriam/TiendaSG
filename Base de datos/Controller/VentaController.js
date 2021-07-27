var Venta = require('../models/venta');
var VentaDetallada = require('../models/ventadeta')
var Producto = require('../models/Producto')

function registrar (request,response){
    let params = request.body;
    var venta = new Venta();
    venta.idCliente = params.idCliente;

    venta.save((error,venta_save) =>{
        if(venta_save){
            let detalles = params.detalles;

            
                detalles.forEach((element,index) =>{
                var ventadetallada = new VentaDetallada();
                ventadetallada.idProducto = element.idProducto;
                ventadetallada.cantidad = element.cantidad;
                ventadetallada.idventa = venta_save._id;
                ventadetallada.idCliente= venta_save.idCliente;
                ventadetallada.PrecioVenta = element.PrecioVenta;
                ventadetallada.Total = element.Total;

                
                ventadetallada.save((error,detalle_save)=>{
                    if(detalle_save){
                        Producto.findById({_id:element.idProducto},(error,producto_params)=>{
                            if(producto_params){
                                Producto.findByIdAndUpdate({_id:producto_params.id},{Inventario: parseInt(producto_params.Inventario)- parseInt(element.cantidad)},(erros,producto_edit)=>{
                                    response.end();
                                })

                            }else{
                                response.send(error);
                            }
                        });

                    }else{
                        response.send(error);
                    }
                })
            })



        }else{
            response.send(error);
        }
    })

}

function datosVenta(request,response){
    var id = request.params['id'];
    
    Venta.findById(id,(error,params_venta)=>{
        if(params_venta){
            VentaDetallada.find({idventa:id},(error,params_detalle)=>{
                if(params_detalle){
                    response.status(200).send(
                        {
                            venta: params_venta,
                            detalles: params_detalle
                        }
                    )
                }
            })
        }
    })

}

function listaVenta(request,response){
    VentaDetallada.find().populate('idCliente').populate('idProducto').exec((error,listaventas)=>{
        if (error) {
            response.status(500).send({ mensaje: "error en el servidor" })
        } else {
            response.status(200).send({ventas:listaventas})
        }
    })

}

function detallesVenta(request,response){
    var id = request.params['id'];

    VentaDetallada.find({idventa: id}).populate('idProducto').exec((error,params_detalles)=>{
        if(params_detalles){
            response.status(200).send({detalles:params_detalles});
        }else{
            response.status(404).send({message:"No se encuentra registro"});
        }
    })

}

// borrar

function deleteVenta(request, response) {

    var idVenta = request.body.idVenta;

    console.log(idVenta)


    VentaDetallada.findByIdAndDelete(idVenta, function(error, Ventadelete) {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en el servidor" })
        } else {
            response.status(200).send({ mensaje: "Venta eliminado" })
        }
    })
}


function Buscarventa(request, response) {

    var VentaDetallada = request.body.FechaFactura;

    VentaDetallada.find({created_at: {
        $gte: ("2010-04-29T00:00:00.000Z"),
        $lt: ("2010-05-01T00:00:00.000Z")
     }}, (error, BuscarVenta) => {
        if (error) {
            response.status(500).send({ mensaje: "error en el servidor" })
        } else {
            response.status(200).send(BuscarVenta)
        }
    })
}

module.exports={
    registrar,
    datosVenta,
    listaVenta,
    detallesVenta,
    Buscarventa,
    deleteVenta

}