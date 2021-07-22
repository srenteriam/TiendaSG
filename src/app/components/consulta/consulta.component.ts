import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  constructor() {
    window.scroll({ 
      top: 0,
      left: 0, 
      behavior: 'smooth' 
    })
   }

  ngOnInit(): void {
  }

}
