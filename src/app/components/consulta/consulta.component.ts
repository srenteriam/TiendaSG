import { Component, OnInit } from '@angular/core';
import { PeticionprodutoService } from 'src/app/services/peticionproduto.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
   
  listado

  constructor(private Peticion:PeticionprodutoService,  private router:Router) {
    window.scroll({ 
      top: 0,
      left: 0, 
      behavior: 'smooth' 
    })
   }

  ngOnInit(): void {
    this.listar()
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

}