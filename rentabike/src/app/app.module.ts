import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ListadoBikeComponent } from './bikes/listado-bike/listado-bike.component';
import { BikeComponent } from './bikes/bike/bike.component';
import { ListadoPrestamosComponent } from './gestion/prestamos/listado-prestamos/listado-prestamos.component';
import { NuevoPrestamoComponent } from './gestion/prestamos/nuevo-prestamo/nuevo-prestamo.component';
import { DetalleBikeComponent } from './bikes/detalle-bike/detalle-bike.component';
import { ListadoProductosComponent } from './abms/productos/listado-productos/listado-productos.component';
import { NuevoProductosComponent } from './abms/productos/nuevo-productos/nuevo-productos.component';
import { FormsModule } from '@angular/forms';
import { ListadoClientesComponent } from './abms/clientes/listado-clientes/listado-clientes.component';
import { NuevoClienteComponent } from './abms/clientes/nuevo-cliente/nuevo-cliente.component';
import { ListadoDevolucionComponent } from './gestion/devolucion/listado-devolucion/listado-devolucion.component';
import { NuevaDevolucionComponent } from './gestion/devolucion/nueva-devolucion/nueva-devolucion.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ListadoBikeComponent,
    BikeComponent,
    ListadoPrestamosComponent,
    NuevoPrestamoComponent,
    DetalleBikeComponent,
    ListadoProductosComponent,
    NuevoProductosComponent,
    ListadoClientesComponent,
    NuevoClienteComponent,
    ListadoDevolucionComponent,
    NuevaDevolucionComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
