import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/gestion/producto.service';

@Component({
  selector: 'app-listado-bike',
  templateUrl: './listado-bike.component.html',
  styleUrls: ['./listado-bike.component.css']
})
export class ListadoBikeComponent implements OnInit {

  constructor(private _bikeService: ProductoService) { }

  ngOnInit(): void {

  }

}