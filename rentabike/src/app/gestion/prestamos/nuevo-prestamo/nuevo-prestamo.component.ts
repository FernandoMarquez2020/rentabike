import { ClienteService } from './../../../abms/clientes/service/cliente.service';
import { ProductoService } from 'src/app/gestion/producto.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-prestamo',
  templateUrl: './nuevo-prestamo.component.html',
  styleUrls: ['./nuevo-prestamo.component.css']
})
export class NuevoPrestamoComponent implements OnInit {
  bike = null;
  cliente = null;
  cedula = "";
  constructor(
    private _route: ActivatedRoute,
    private _productoService:ProductoService,
    private _clienteService: ClienteService
    ) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(param=>{
      let id = parseInt(param.get('bike'));
      this._productoService.getById(id).subscribe(response=>{
        this.bike = response;
      })
    })
  }

  buscarClientes(){
    this._clienteService.filter("cedula",this.cedula).subscribe(response=>{
      if(response[0] !== undefined){
        this.cliente = response[0];
      }
      else{
        console.log("!! no")
      }

    })
  }

  handlerInput(event){
    if(event.key === "Enter"){
      this.cliente = null;
      this.buscarClientes();
    }
  }

}
