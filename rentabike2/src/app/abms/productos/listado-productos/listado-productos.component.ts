import { ProductoService } from './../../../gestion/producto.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResourceLoader } from '@angular/compiler';


@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {
  

  constructor(private _productosService:ProductoService, private modalService: NgbModal, private cd: ChangeDetectorRef) { }
  
  
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  
  }
  refresh(): void {
    window.location.reload();
}

  productos:any;
  termino = "";
  backup:any;
  ngOnInit(): void {
    this._productosService.getBikes().subscribe(data => {
      this.productos = data;
      this.cd.detectChanges();
      this.backup = this.productos;
      
     
     
    });
  }

  eliminarProducto(id){

    Swal.fire({
      title: 'Estas seguro?',
      text: 'Estas a punto de eliminar un producto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this._productosService.deleteBike(id).subscribe(response=>{
          let newProductos = this.productos.filter(item =>{
            return item.id !== id
          });
          this.productos = newProductos;
          Swal.fire(
            'Eliminado!',
            'El producto ha sido eliminado.',
            'success'
          );
        });

      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'El producto no sera eliminado :)',
          'error'
        )
      }
    })
  }

  filtrar(){
    let newProductos = this.productos.filter(producto => {
      return producto.nombre.toLowerCase().includes(this.termino.toLowerCase()) === true
    });
    this.productos = newProductos;
  }

  handlerInput(event){
    if(event.target.value.length === 0){
      this.productos = this.backup;
    }
  }
}
