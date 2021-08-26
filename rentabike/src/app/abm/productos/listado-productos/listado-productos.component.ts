import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/gestion/producto.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  constructor(private _productosService: ProductoService) {

   }
   productos:any;

  ngOnInit(): void {
    this._productosService.getBikes().subscribe(data => {
      this.productos = data;
    })
  }

}
