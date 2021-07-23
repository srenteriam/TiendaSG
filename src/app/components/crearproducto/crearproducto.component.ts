import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionprodutoService } from '../../services/peticionproduto.service';


@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.css']
})
export class CrearproductoComponent implements OnInit {

  NombreP = "";
  Inven = "";
  PreVen = "";
  PreCom = "";
  mensaje: string = "";

  constructor(private Peticion:PeticionprodutoService, private router:Router) { }

  ngOnInit(): void {
  }

  validarformulario(){

    this.mensaje = ""

    if(this.NombreP == '' || this.NombreP == null || this.NombreP == undefined){
      this.mensaje = "El Nombre del Producto es OBLIGATORIO"
      return false;
    }

    if(this.Inven == '' || this.Inven == null || this.Inven == undefined){
      this.mensaje = "El Inventario es OBLIGATORIO"
      return false;
    }

    if(this.PreVen == '' || this.PreVen == null || this.PreVen == undefined){
      this.mensaje = "El Precio de Venta es OBLIGATORIO"
      return false;
    }

    if(this.PreCom == '' || this.PreCom == null || this.PreCom == undefined){
      this.mensaje = "El Precio de Compra es OBLIGATORIO"
      return false;
    }else{ return true }
  }

  crearproducto(){
    this.validarformulario()

    if(this.validarformulario() == true){   

    console.log('Estamos Registrando')

    this.Peticion.Post('http://localhost:3000/create',{NombreProducto:this.NombreP, Inventario:this.Inven , PrecioVenta:this.PreVen, PrecioCompra:this.PreCom}).then(
      (res) => {
        console.log(res)
      })}

    if(this.validarformulario() == true){
      this.router.navigate(["/productos"])
    }

  }



}