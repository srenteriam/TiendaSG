import { PeticionprodutoService } from './../../services/peticionproduto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-editar-p',
  templateUrl: './editar-p.component.html',
  styleUrls: ['./editar-p.component.css']
})
export class EditarPComponent implements OnInit {

  NombreP= "";
  Inven= "";
  PreVen= "";
  PreCom="";
  
  constructor(private activateRoute: ActivatedRoute, private peticion:PeticionprodutoService, private router:Router) { }

  ngOnInit(): void {

    

    this.listarProducto(this.activateRoute.snapshot.params.id)

  }

  listarProducto(idP){

    this.peticion.Post('http://localhost:3000/listarProducto',{idProducto:idP}).then(
      (res) => {
        
        console.log(res);
      // this.NombreP = res[0].NombreProducto;
      // this.Inven = res[0].Inventario;
      // this.PreVen = res[0].PrecioVenta;
      // this.PreCom = res[0].PrecioCompra;
      }
    )

  }

  Actualizar(){

    this.peticion.Post('http://localhost:3000/actualizar',{idProducto:this.activateRoute.snapshot.params.id, NombreProducto:this.NombreP, Inventario:this.Inven, PrecioVenta:this.PreVen, PrecioCompra:this.PreCom}).then(
      (res) => {
        
        console.log(res);
        this.router.navigate(["/productos"])
      
      }
    )

  }



}
