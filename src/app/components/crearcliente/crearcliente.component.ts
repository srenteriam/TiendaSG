import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionprodutoService } from '../../services/peticionproduto.service';

@Component({
  selector: 'app-crearcliente',
  templateUrl: './crearcliente.component.html',
  styleUrls: ['./crearcliente.component.css']
})
export class CrearclienteComponent implements OnInit {

  NombreC = "";
  ApellidoC =""; 
  NaciC = "";
  TelefonoC = "";
  EdadC = "";
  mensaje: string = "";

  constructor(private Peticion:PeticionprodutoService, private router:Router) { }

  ngOnInit(): void {
    
  }

  validarcliente(){

    this.mensaje = ""

    if(this.NombreC == '' || this.NombreC == null || this.NombreC == undefined){
      this.mensaje = "El Nombre es OBLIGATORIO"
      return false;
    }

    if(this.ApellidoC == '' || this.ApellidoC == null || this.ApellidoC == undefined){
      this.mensaje = "El Apellido es OBLIGATORIO"
      return false;
    }

    if(this.NaciC == '' || this.NaciC == null || this.NaciC == undefined){
      this.mensaje = "Fecha de Nacimiento OBLIGATORIA"
      return false;
    }

    if(this.TelefonoC == '' || this.TelefonoC == null || this.TelefonoC == undefined){
      this.mensaje = "El Telefono es OBLIGATORIO"
      return false;
    }

    if(this.EdadC == '' || this.EdadC == null || this.EdadC == undefined){
      this.mensaje = "La Edad es OBLIGATORIA"
      return false;
    }else{ return true }
  }

  crearcliente(){
    this.validarcliente()

    if(this.validarcliente() == true){   

      console.log('Estamos Registrando')
      
      this.Peticion.Post('http://localhost:3000/createcliente',{Nombre:this.NombreC, Apellido:this.ApellidoC , FechaNacimiento:this.NaciC, Telefono:this.TelefonoC, Edad:this.EdadC}).then(
      (res) => {
        console.log(res)
      })}

    if(this.validarcliente() == true){
      this.router.navigate(["/clientes"])
    }
  }
}

