import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ListadoBikeComponent } from './bikes/listado-bike/listado-bike.component';
import { BikeComponent } from './bikes/bike/bike.component';
import { ListadoPrestamosComponent } from './gestion/listado-prestamos/listado-prestamos.component';
import { NuevoPrestamoComponent } from './gestion/nuevo-prestamo/nuevo-prestamo.component';
import { DetalleBikeComponent } from './bikes/detalle-bike/detalle-bike.component';
import { ListadoProductosComponent } from './abms/productos/listado-productos/listado-productos.component';
import { NuevoProductosComponent } from './abms/productos/nuevo-productos/nuevo-productos.component';
import { FormsModule } from '@angular/forms';

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
    NuevoProductosComponent
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
