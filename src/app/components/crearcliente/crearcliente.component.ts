import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crearcliente',
  templateUrl: './crearcliente.component.html',
  styleUrls: ['./crearcliente.component.css']
})
export class CrearclienteComponent implements OnInit {

  NombreP = "";
  Inven = "";
  PreVen = "";
  PreCom = "";

  constructor() { }

  ngOnInit(): void {
  }

  crearproducto(){}
}
