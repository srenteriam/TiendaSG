import { Component, OnInit } from '@angular/core';
import { PeticionprodutoService } from 'src/app/services/peticionproduto.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

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
    console.log('Listado de Facturas')

    this.Peticion.Get('http://localhost:3000/listaventa').then(
      (res) => {
        console.log(res);
        this.listado = res.ventas;
      }
    )
  }

  Eliminar(idVenta){
    
    this.Peticion.Post('http://localhost:3000/eliminarventa',{
    idVenta:this.activateRoute.snapshot.params.id}).then(
    (res) => {        
      console.log(res);
      this.router.navigate(["/facturas"])     
    })
  }

}
