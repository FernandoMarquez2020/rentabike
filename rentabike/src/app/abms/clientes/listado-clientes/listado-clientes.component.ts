import { ClienteService } from './../service/cliente.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes:any;
  termino = "";
  backup:any;
  constructor(private _clientesService:ClienteService) { }
  ngOnInit(): void {
    this._clientesService.getClientes().subscribe(data => {
      this.clientes = data;
      this.backup = this.clientes;
    });
  }

  eliminarProducto(id){

    Swal.fire({
      title: 'Estas seguro?',
      text: 'Estas a punto de eliminar un Cliente!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this._clientesService.deleteCliente(id).subscribe(response=>{
          let newProductos = this.clientes.filter(item =>{
            return item.id !== id
          });
          this.clientes = newProductos;
          Swal.fire(
            'Eliminado!',
            'El cliente ha sido eliminado.',
            'success'
          );
        });

      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'El cliente no sera eliminado :)',
          'error'
        )
      }
    })
  }

  filtrar(){
    let newClientes = this.clientes.filter(cliente => {
      return cliente.nombre.toLowerCase().includes(this.termino.toLowerCase()) === true
    });
    this.clientes = newClientes;
  }

  handlerInput(event){
    if(event.target.value.length === 0){
      this.clientes = this.backup;
    }
  }

}
