import { PrestamoService } from './../prestamo.service';
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
  formCliente = false;
  formPrestamo = true;
  clienteData = {
    "id": 0,
    "nombre": "",
    "edad": "",
    "cedula": "",
    "mail": "",
    "telefono": "",
    "direccion": ""
}
prestamo = {
  "id":0,
  "bike_id":0,
  "cliente_id":0,
  "fecha":"",
  "duracion":0,
  "importe":0
}
clienteId = 0;
  constructor(
    private _route: ActivatedRoute,
    private _productoService:ProductoService,
    private _clienteService: ClienteService,
    private _prestamoService: PrestamoService
    ) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(param=>{
      let id = parseInt(param.get('bike'));
      this._productoService.getById(id).subscribe(response=>{
        this.bike = response;
        this.prestamo.bike_id = this.bike.id;
      })
    })
  }

  buscarClientes(){
    this._clienteService.filter("cedula",this.cedula).subscribe(response=>{
      if(response[0] !== undefined){
        this.cliente = response[0];
        this.formCliente = false;
        this.clienteData = this.cliente
        this.formPrestamo = true;
        this.prestamo.cliente_id = this.cliente.id;
      }
      else{
        this.formCliente = true;
        this.formPrestamo = false;
        this.clienteData = {
          "id": 0,
          "nombre": "",
          "edad": "",
          "cedula": "",
          "mail": "",
          "telefono": "",
          "direccion": ""
      }
      }

    })
  }

  handlerInput(event){
    if(event.key === "Enter"){
      this.cliente = null;
      this.buscarClientes();
    }
  }

  guardarCliente(){
    this.clienteData.cedula = this.cedula;
    this._clienteService.postCliente(this.clienteData).subscribe(response =>{
      this.cliente = response;
      this.clienteData = this.cliente;
      this.formCliente = false;
      this.formPrestamo = true;
      this.prestamo.cliente_id = this.cliente.id;
    });
  }


  aceptarPrestamo(){
    this._prestamoService.postPrestamo(this.prestamo).subscribe(response=>{
      console.log("nuevo prestamo",response)
    })
  }

}
