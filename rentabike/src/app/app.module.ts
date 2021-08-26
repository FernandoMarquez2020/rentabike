import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ListadoBikeComponent } from './bikes/listado-bike/listado-bike.component';
import { BikeComponent } from './bikes/bike/bike.component';
import { ListadoPrestamosComponent } from './negocio/listado-prestamos/listado-prestamos.component';
import { NuevoPrestamoComponent } from './negocio/nuevo-prestamo/nuevo-prestamo.component';
import { DetalleBikeComponent } from './bikes/detalle-bike/detalle-bike.component';
import { ListadoProductosComponent } from './abm/productos/listado-productos/listado-productos.component';
import { NuevoProductoComponent } from './abm/productos/nuevo-producto/nuevo-producto.component';

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
    NuevoProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
