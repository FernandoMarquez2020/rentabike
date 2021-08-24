import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit {
  showToast = "";
  message = "";
  cliente = {
    "id": 0,
    "nombre": "",
    "edad": 0,
    "cedula": "",
    "mail": "",
    "telefono": "",
    "direccion": ""
}
nombre_valid = "";
cedula_valid = "";
edad_valid ="";
telefono_valid ="";
mail_valid ="";
  constructor() { }

  ngOnInit(): void {
  }


  handleNameInput(event){

  }

  guardar(){

  }

  handleCedulaInput(event){

  }

  handleEdadInput(event){

  }

  handleTelefonoInput(event){

  }

  handleMailInput(event){

  }

}
