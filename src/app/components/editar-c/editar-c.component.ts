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
      // this.NombreC = res[0].Nombre;
      // this.Inven = res[0].Inventario;
      // this.PreVen = res[0].PrecioVenta;
      // this.PreCom = res[0].PrecioCompra;
      // this.PreCom = res[0].PrecioCompra;
      }
    )

  }

  Actualizar(){

    this.peticion.Post('http://localhost:3000/actualizarcliente',{idCliente:this.activateRoute.snapshot.params.id, Nombre:this.NombreC, Apellido:this.ApellidoC, PrecioVenta:this.NaciC, Telefono:this.TelefonoC, Edad:this.EdadC}).then(
      (res) => {
        
        console.log(res);
        this.router.navigate(["/clientes"])
      
      }
    )

  }

}
