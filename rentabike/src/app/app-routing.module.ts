import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoProductosComponent } from './abms/productos/listado-productos/listado-productos.component';
import { NuevoProductosComponent } from './abms/productos/nuevo-productos/nuevo-productos.component';
import { ListadoBikeComponent } from './bikes/listado-bike/listado-bike.component';
import { NuevoPrestamoComponent } from './gestion/nuevo-prestamo/nuevo-prestamo.component';

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
    path:"gestion/nuevo-producto",component:NuevoProductosComponent
  },
  {
    path:"gestion/nuevo-producto/:id",component:NuevoProductosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
