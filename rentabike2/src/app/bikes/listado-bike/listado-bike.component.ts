import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/gestion/producto.service';

@Component({
  selector: 'app-listado-bike',
  templateUrl: './listado-bike.component.html',
  styleUrls: ['./listado-bike.component.css']
})
export class ListadoBikeComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  productos:any;
  constructor(private _bikeService: ProductoService) { }

  ngOnInit(): void {
    this._bikeService.getBikes().subscribe(response => {
      this.productos = response;
    });
  }

}
