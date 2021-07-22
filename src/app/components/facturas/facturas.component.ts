import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

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
