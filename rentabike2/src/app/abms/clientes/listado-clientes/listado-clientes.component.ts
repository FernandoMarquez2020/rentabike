import { ClienteService } from './../service/cliente.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Component, Directive, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { NuevoClienteComponent } from '../nuevo-cliente/nuevo-cliente.component';


interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})

export class ListadoClientesComponent implements OnInit {
  
  @Input() cliente;


  onSort({column, direction}: SortEvent) {

    // resetting other headers
   
    // this.headers.forEach(header => {
    //   if (header.sortable !== column) {
    //     header.direction = '';
    //   }
    // });

    // sorting countries
    if (direction === '' || column === '') {
      this.countries = COUNTRIES;
    } else {
      this.countries = [...COUNTRIES].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  

  countries = COUNTRIES;

  clientes:any;
  termino = ""; 
  backup:any;
  content:any;
  constructor(
    private _clientesService:ClienteService,
    private modalService: NgbModal
    ) { }
    
    
    open2(cliente) {
      const modalRef = this.modalService.open(NuevoClienteComponent, { size: 'lg' });
      
      modalRef.componentInstance.cliente= cliente;
      modalRef.result.then(item => {
        console.log(item);
        
      })
    }

  ngOnInit(): void {
    this._clientesService.getClientes().subscribe(data => {
      this.clientes = data;
      this.backup = this.clientes;
    });
  }

  openLg(content) {
    const modalRef = this.modalService.open(NuevoClienteComponent, { size: 'lg' });
    modalRef.result.then(item => {
      console.log(item);
      this.clientes.push(item)
    })
  }

  eliminarCliente(id){

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
    }}
}


export type SortColumn = keyof Country | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdSortableHeader {

  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }






  // countries = COUNTRIES;

  

  

}
  
