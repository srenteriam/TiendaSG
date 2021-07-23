import { Component, OnInit } from '@angular/core';
import { PeticionprodutoService } from 'src/app/services/peticionproduto.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  
  listaclientes
  
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

    this.Peticion.Post('http://localhost:3000/listarcliente',{}).then(
      (res) => {
        console.log(res);
        this.listaclientes = res;
      }
    )
  }

  Eliminar(idCliente){
    
      this.Peticion.Post('http://localhost:3000/eliminarcliente',{
      idCliente:this.activateRoute.snapshot.params.id}).then(
      (res) => {        
        console.log(res);
        this.router.navigate(["/clientes"])     
      })
    }
}
