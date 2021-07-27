import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionprodutoService } from '../../services/peticionproduto.service';
import { ActivatedRoute } from '@angular/router';
import { VentaDetallada } from '../../models/ventadeta';
import { Venta } from '../../models/venta';


@Component({
  selector: 'app-crearfactura',
  templateUrl: './crearfactura.component.html',
  styleUrls: ['./crearfactura.component.css']
})
export class CrearfacturaComponent implements OnInit {


    Total= 0;
    idcliente = "";
    idproducto = "";
    unidades = "";
    mensaje: string = "";
    PreVen= "";
    listaclientes
    listaproductos
    datos_detalle : Array<any> = [];
    public detalle: any = {
      idcliente : '',
      idproducto: '',
      unidades: '',
    }

  constructor(private Peticion:PeticionprodutoService, private router:Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.listar()
    this.listar1()
  }
  
  listar(){
   
    this.Peticion.Post('http://localhost:3000/listar',{}).then(
      (res) => {
        console.log(res);
        this.listaproductos = res;
      }
    )
  }

  listar1(){
    
    this.Peticion.Post('http://localhost:3000/listarcliente',{}).then(
      (res) => {
        console.log(res);
        this.listaclientes = res;
      }
    )
  }

 
  
  validarfactura(){

 this.mensaje = ""

 if(this.idcliente == '' || this.idcliente == null || this.idcliente == undefined){
    this.mensaje = "Cliente OBLIGATORIO"
    return false;
    }

    if(this.unidades == '' || this.unidades == null || this.unidades == undefined){
       this.mensaje = "Unidades OBLIGATORIAS"
       return false;
  }else{ return true }
   }

 get_data_producto(_id){
    this.Peticion.Post('http://localhost:3000/listarProducto',{idProducto:_id}).then(
      (res) => {
  
                this.PreVen = res[0].PrecioVenta;
         
      }
    )
  }
  save_detalle(detalleForm){
    if(detalleForm.valid){

      this.datos_detalle.push({
        // idCliente: detalleForm.value.idcliente,
        idProducto: detalleForm.value.idproducto,
        cantidad: detalleForm.value.unidades,
        PrecioVenta: detalleForm.value.PreVen,
        Total: this.Total = this.Total + (parseInt(detalleForm.value.PreVen)*parseInt(detalleForm.value.unidades)),
      });

      this.detalle= new VentaDetallada('','',1);

      

    }else{
      console.log('error');
    }

  }

  onSubmit(detalleForm){
     this.validarfactura()

     if(this.validarfactura() == true){ 
       
       let data = {
        idCliente: this.idcliente,
        detalles: this.datos_detalle,
        }
       console.log(data);

       this.Peticion.save_data(data).subscribe(
       res => {
         console.log(res);
       },error =>{console.log(error)})
      }else{
         console.log('error');
       }
      
      

     if(this.validarfactura() == true){
       this.router.navigate(["/facturas"])
      
      }
  }
}


