import { Component, OnInit } from '@angular/core';
import { PeticionprodutoService } from 'src/app/services/peticionproduto.service';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  listado

  constructor(private Peticion:PeticionprodutoService) { 
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
    console.log('Listado de Usuarios')

    this.Peticion.Post('http://localhost:3000/listar',{}).then(
      (res) => {
        console.log(res);
        this.listado = res;
      }
    )

  }


}
