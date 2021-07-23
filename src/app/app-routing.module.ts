import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturasComponent } from './components/facturas/facturas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { CrearproductoComponent } from './components/crearproducto/crearproducto.component';
import { CrearclienteComponent } from './components/crearcliente/crearcliente.component';
import { CrearfacturaComponent } from './components/crearfactura/crearfactura.component';
import { EditarPComponent } from './components/editar-p/editar-p.component';
import { EditarCComponent } from './components/editar-c/editar-c.component';



const routes: Routes = [
  {path:'', component: ProductosComponent},
  {path:'productos', component: ProductosComponent},
  {path:'clientes', component: ClientesComponent},
  {path:'facturas', component: FacturasComponent},
  {path:'consulta', component: ConsultaComponent},
  {path:'crearproducto', component: CrearproductoComponent},
  {path:'crearcliente', component: CrearclienteComponent},
  {path:'crearfactura', component: CrearfacturaComponent},
  {path:'editarp/:id', component: EditarPComponent},
  {path:'productos/:id', component: ProductosComponent},
  {path:'clientes/:id', component: ClientesComponent},
  {path:'editarc/:id', component: EditarCComponent},
  
  {path:'**', redirectTo:'productos',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
