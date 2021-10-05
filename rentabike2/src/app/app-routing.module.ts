import { DetalleBikeComponent } from './bikes/detalle-bike/detalle-bike.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ListadoPrestamosComponent } from './gestion/prestamos/listado-prestamos/listado-prestamos.component';
import { ListadoDevolucionComponent } from './gestion/devolucion/listado-devolucion/listado-devolucion.component';
import { NuevoClienteComponent } from './abms/clientes/nuevo-cliente/nuevo-cliente.component';
import { ListadoClientesComponent } from './abms/clientes/listado-clientes/listado-clientes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoProductosComponent } from './abms/productos/listado-productos/listado-productos.component';
import { NuevoProductosComponent } from './abms/productos/nuevo-productos/nuevo-productos.component';
import { ListadoBikeComponent } from './bikes/listado-bike/listado-bike.component';
import { NuevoPrestamoComponent } from './gestion/prestamos/nuevo-prestamo/nuevo-prestamo.component';
import { NuevaDevolucionComponent } from './gestion/devolucion/nueva-devolucion/nueva-devolucion.component';

const routes: Routes = [
  {
    path:"",component:ListadoBikeComponent
  },
  {
    path:"bikes/bike/:id", component: DetalleBikeComponent
  },
  {
    path:"gestion/prestamos/nuevo-prestamo/:bike",component:NuevoPrestamoComponent
  },
  {
    path:"gestion/prestamos/listado-prestamo",component:ListadoPrestamosComponent
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
  {
    path:"gestion/clientes",component:ListadoClientesComponent
  },
  {
    path:"gestion/nuevo-cliente",component:NuevoClienteComponent
  },
  {
    path:"gestion/nuevo-cliente/:id",component:NuevoClienteComponent
  },
  {
    path: "gestion/devolucion/listado-devolucion", component:ListadoDevolucionComponent
  },
  {
    path: "gestion/devolucion/nueva-devolucion", component:NuevaDevolucionComponent
  },
  {
    path:"**",component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
