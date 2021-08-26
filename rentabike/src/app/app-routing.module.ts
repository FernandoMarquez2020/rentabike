import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoProductosComponent } from './abm/productos/listado-productos/listado-productos.component';
import { NuevoProductoComponent } from './abm/productos/nuevo-producto/nuevo-producto.component';
import { ListadoBikeComponent } from './bikes/listado-bike/listado-bike.component';
import { NuevoPrestamoComponent } from './negocio/nuevo-prestamo/nuevo-prestamo.component';

const routes: Routes = [
  {
    path:"",component:ListadoBikeComponent
    
  },
  {
    path:"nuevo-prestamo",component:NuevoPrestamoComponent
    
  },
  {
    path:"gestion/productos",component:ListadoProductosComponent
    
  },
  {
    path:"gestion/nuevo-producto",component:NuevoProductoComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
