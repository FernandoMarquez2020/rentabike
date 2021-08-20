import { ProductoService } from './../../../gestion/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  constructor(private _productosService:ProductoService) { }
  productos:any;
  ngOnInit(): void {
    this._productosService.getBikes().subscribe(data => {
      this.productos = data;
    });
  }

  eliminarProducto(id){
    this._productosService.deleteBike(id).subscribe(response=>{
      let newProductos = this.productos.filter(item =>{
        return item.id !== id
      });
      this.productos = newProductos;
    })
  }
}
