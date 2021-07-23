import { Component, OnInit } from '@angular/core';
import { PeticionprodutoService } from 'src/app/services/peticionproduto.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';





@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  listado

  constructor(private Peticion:PeticionprodutoService, private activateRoute: ActivatedRoute, private router:Router) { 
    window.scroll({ 
      top: 0,
      left: 0, 
      behavior: 'smooth' 
    })
  }

  ngOnInit(): void {
    this.listar()
    this.Eliminar(this.activateRoute.snapshot.params.id)
  }


  listar(){
    console.log('Listado de Usuarios')

    this.Peticion.Post('http://localhost:3000/listar',{}).then(
      (res) => {
        console.log(res);
        this.listado = res;
      }
    )
  }

  
  Eliminar(idProducto){
    
      this.Peticion.Post('http://localhost:3000/eliminar',{
      idProducto:this.activateRoute.snapshot.params.id}).then(
      (res) => {        
        console.log(res);
        this.router.navigate(["/productos"])     
      })
     
 
   }


}
