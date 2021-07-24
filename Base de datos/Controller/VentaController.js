var Venta = require('../models/venta');
var VentaDetallada = require('../models/ventadeta')
var Producto = require('../models/Producto')

function registrar (request,response){
    let params = request.body;
    var venta = new Venta();
    venta.idCliente = params.idCliente;

    venta.save((error,Venta_save) =>{
        if(Venta_save){
            let detalles = params.detalles;

            
                detalles.forEach((element,index) =>{
                var ventadetallada = new VentaDetallada();
                ventadetallada.idProducto = element.idProducto;
                ventadetallada.cantidad = element.cantidad;
                ventadetallada.idventa = Venta_save._id;
                
                ventadetallada.save((error,detalle_save)=>{
                    if(detalle_save){
                        Producto.findById({_id:element.idProducto},(error,producto_params)=>{
                            if(producto_params){
                                Producto.findByIdAndUpdate({_id:producto_params.id},{Inventario: parseInt(producto_params.Inventario)- parseInt(element.cantidad)},(erros,producto_edit)=>{
                                    response.end();
                                })

                            }else{
                                response.send('No se encontro el producto');
                            }
                        });

                    }else{
                        response.send('No se realizo el registro');
                    }
                })
            })



        }else{
            response.send('No se realizo el registro');
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
    Venta.find().populate('idCliente').exec((error,params_ventas)=>{
        if(params_ventas){
            response.status(200).send({ventas:params_ventas});
        }else{
            response.status(404).send({message:"No se encuentra registro alguno"});
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

module.exports={
    registrar,
    datosVenta,
    listaVenta,
    detallesVenta

}