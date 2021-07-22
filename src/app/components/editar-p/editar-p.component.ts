import { PeticionprodutoService } from './../../services/peticionproduto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-editar-p',
  templateUrl: './editar-p.component.html',
  styleUrls: ['./editar-p.component.css']
})
export class EditarPComponent implements OnInit {

  NombreP:string = "";
  Inven:number = 0;
  PreVen:Number = 0;
  PreCom:number = 0;
  
  constructor(private activateRoute: ActivatedRoute, private peticion:PeticionprodutoService) { }

  ngOnInit(): void {

    

    this.listarProducto(this.activateRoute.snapshot.params.id)

  }

  listarProducto(idP){

    this.peticion.Post('http://localhost:3000/listarProducto',{idProducto:idP}).then(
      (res) => {
        
        console.log(res);
        // this.NombreP = res[0].NombreProducto;
        // this.Inven = this.res[0].Inventario;
        // this.PreVen = this.res[0].PrecioVenta;
        // this.PreCom = this.res[0].PrecioCompra;
      }
    )

  }



}
