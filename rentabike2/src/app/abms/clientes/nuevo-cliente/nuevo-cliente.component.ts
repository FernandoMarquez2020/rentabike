import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from './../service/cliente.service';
import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from 'src/app/componente/toast/toast.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit {

  @Input() cliente1;

  showToast = "";
  message = "";
  cliente = {
    "id": 0,
    "nombre": "",
    "edad": "",
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
id = 0;
 
  constructor(
    private _clienteService: ClienteService,
    private route: ActivatedRoute, 
    private toastService: ToastService,
    private _router: Router, 
    private activeModal: NgbActiveModal
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(response=>{
      if(response.id !== undefined){
        this.id = response.id;
        this._clienteService.getById(this.id).subscribe(response=>{
          this.cliente = JSON.parse(JSON.stringify(response));
        })
      }
    });
  }

cleanForm(){
  this.cliente = {
    "id": 0,
    "nombre": "",
    "edad": "",
    "cedula": "",
    "mail": "",
    "telefono": "",
    "direccion": ""
}
}

  guardar(){
    if(this.isValid()){
      if(this.cliente.id === 0){
        //creando un nuevo cliente
        this._clienteService.postCliente(this.cliente).subscribe(response=>{
          this.cleanForm();
          this.toastService.show('Cliente guardado correctamente', { classname: 'bg-success text-light', delay: 5000 });
          this.activeModal.close(response)
        });
      }
      else{
        this._clienteService.putCliente(this.cliente).subscribe(response=>{
          this.cleanForm();
          this.toastService.show('Cliente modificado correctamente', { classname: 'bg-success text-light', delay: 5000 });
          this.activeModal.close(response)
          
        });
      }
     
    }
    else{
      // error de servidor
    }
  }

  isValid(){
    let valid = true;
    if(this.cliente.nombre.length === 0){
      this.nombre_valid = "is-invalid";
      valid = false;
    }
    if(this.cliente.cedula.length === 0){
      this.cedula_valid = "is-invalid";
      valid = false;
    }
    if(this.cliente.edad.length === 0){
      this.edad_valid =  "is-invalid";
      valid = false;
    }
    if(this.cliente.mail.length === 0){
      this.mail_valid =  "is-invalid";
      valid = false;
    }
    if(this.cliente.telefono.length === 0){
      this.telefono_valid =  "is-invalid";
      valid = false;
    }

    return valid;
  }

  handleCedulaInput(event){
    if(event.target.value.length > 0){
      this.cedula_valid = "is-valid";
    }
    else{
      this.cedula_valid = "is-invalid";
    }
  }


  handleNameInput(event){
    if(event.target.value.length > 0){
      this.nombre_valid = "is-valid";
    }
    else{
      this.nombre_valid = "is-invalid";
    }
  }

  handleEdadInput(event){
    if(event.target.value.length > 0){
      this.edad_valid = "is-valid";
    }
    else{
      this.edad_valid = "is-invalid";
    }
  }

  handleTelefonoInput(event){
    if(event.target.value.length > 0){
      this.telefono_valid = "is-valid";
    }
    else{
      this.telefono_valid = "is-invalid";
    }
  }

  handleMailInput(event){
    if(event.target.value.length > 0){
      this.mail_valid = "is-valid";
    }
    else{
      this.mail_valid = "is-invalid";
    }
  }

  showSuccess(){
    this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 5000 });
  }
}
