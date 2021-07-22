import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MenuComponent } from './components/menu/menu.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { CrearproductoComponent } from './components/crearproducto/crearproducto.component';
import { CrearclienteComponent } from './components/crearcliente/crearcliente.component';
import { CrearfacturaComponent } from './components/crearfactura/crearfactura.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditarPComponent } from './components/editar-p/editar-p.component';

HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    MenuComponent,
    ClientesComponent,
    FacturasComponent,
    ConsultaComponent,
    CrearproductoComponent,
    CrearclienteComponent,
    CrearfacturaComponent,
    EditarPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
