import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionprodutoService } from '../../services/peticionproduto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crearfactura',
  templateUrl: './crearfactura.component.html',
  styleUrls: ['./crearfactura.component.css']
})
export class CrearfacturaComponent implements OnInit {


    NumeroF = "";
    FechaF = "";
    IdC = "";
    IdP = "";
    Unis = "";
    TVenta = "";
    NombreC = "";
    ApellidoC =""; 
    NaciC = "";
    TelefonoC = "";
    EdadC = "";
    NombreP = "";
    Inven = "";
    PreVen = "";
    PreCom = "";
    mensaje: string = "";
    listaproductos
    listaclientes

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

    if(this.FechaF == '' || this.FechaF == null || this.FechaF == undefined){
      this.mensaje = "Fecha OBLIGATORIA"
      return false;
    }

    if(this.IdC == '' || this.IdC == null || this.IdC == undefined){
      this.mensaje = "Cliente OBLIGATORIO"
      return false;
    }

    if(this.IdP == '' || this.IdP == null || this.IdP == undefined){
      this.mensaje = "Producto OBLIGATORIO"
      return false;
    }

    if(this.Unis == '' || this.Unis == null || this.Unis == undefined){
      this.mensaje = "Unidades OBLIGATORIAS"
      return false;
    }else{ return true }
  }

  crearfactura(){
    this.validarfactura()

    if(this.validarfactura() == true){   

      console.log('Estamos Registrando')
      
      this.Peticion.Post('http://localhost:3000/createFactura',{NumeroFactura:this.NumeroF, FechaFactura:this.FechaF , IdCliente:this.IdC, IdProducto:this.IdP, Unidades:this.Unis, TotalVenta:this.TVenta }).then(
      (res) => {
        console.log(res)
      })}

    if(this.validarfactura() == true){
      this.router.navigate(["/facturas"])
    }
  }

}
