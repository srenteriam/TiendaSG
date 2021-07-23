import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PeticionprodutoService } from '../../services/peticionproduto.service';


@Component({
  selector: 'app-editar-c',
  templateUrl: './editar-c.component.html',
  styleUrls: ['./editar-c.component.css']
})
export class EditarCComponent implements OnInit {


  NombreC = "";
  ApellidoC =""; 
  NaciC = "";
  TelefonoC = "";
  EdadC = "";

  constructor(private activateRoute: ActivatedRoute, private peticion:PeticionprodutoService, private router:Router) { }

  ngOnInit(): void {
    this.listarCliente(this.activateRoute.snapshot.params.id)
  }

  listarCliente(idC){

    this.peticion.Post('http://localhost:3000/listarclientei',{idCliente:idC}).then(
      (res) => {
        
        console.log(res);
        this.NombreC = res[0].Nombre;
        this.ApellidoC = res[0].Apellido;
        this.NaciC = res[0].FechaNacimiento;
        this.TelefonoC = res[0].Telefono;
        this.EdadC = res[0].Edad;
      }
    )

  }

  Actualizar(){

    this.peticion.Post('http://localhost:3000/actualizarcliente',{idCliente:this.activateRoute.snapshot.params.id, Nombre:this.NombreC, Apellido:this.ApellidoC, FechaNacimiento:this.NaciC, Telefono:this.TelefonoC, Edad:this.EdadC}).then(
      (res) => {
        
        console.log(res);
        this.router.navigate(["/clientes"])
      
      }
    )

  }

}
