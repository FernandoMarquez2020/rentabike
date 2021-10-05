import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/gestion/producto.service';
import { CategoriaService } from '../../categorias/categoria.service';
import { MarcaService } from '../../marcas/marca.service';
import { ToastService } from 'src/app/componente/toast/toast.service';

@Component({
  selector: 'app-nuevo-productos',
  templateUrl: './nuevo-productos.component.html',
  styleUrls: ['./nuevo-productos.component.css']
})
export class NuevoProductosComponent implements OnInit {
  categorias:any;
  marcas:any;
  selectedCategoria="";
  selectedMarca="";
  bike = {
    "id": 0,
    "nombre": "",
    "descripcion": "",
    "precio": "",
    "disponible": true,
    "marca": "",
    "categoria": "",
    "imagen": "https://m.media-amazon.com/images/I/712SL7O5vmS._AC_SX425_.jpg"
};
nombre_valid = "";
precio_valid = "";
categoria_valid = "";
marca_valid = "";
id = 0;
showToast = "";
message = ""
  
  
  constructor(
    private _categoriaService:CategoriaService,
    private _marcaService:MarcaService,
    private _productoService:ProductoService,
    private toastService: ToastService,
    private route: ActivatedRoute,
    private _router: Router,
    ) { }

  ngOnInit(): void {
    this._categoriaService.getCategorias().subscribe(response =>{
      this.categorias = response;
    });
    this._marcaService.getMarcas().subscribe(response =>{
      this.marcas = response;
    });

    this.route.params.subscribe(response=>{
      if(response.id !== undefined){
        this.id = response.id;
        this._productoService.getById(this.id).subscribe(response=>{
          this.bike = JSON.parse(JSON.stringify(response));
          this.selectedCategoria = this.bike.categoria;
          this.selectedMarca = this.bike.marca;
        })
      }
    });
  }

  guardar(){
    if(this.isValid()){
      if(this.bike.id === 0){
        //creando una nueva bike
        this._productoService.postBike(this.bike).subscribe(response=>{
          this.cleanForm();
          this.toastService.show('El producto se inserto correctamente', { classname: 'bg-success text-light', delay: 5000 });
         
        });
      }
      else{
        this._productoService.putBike(this.bike).subscribe(response=>{
          this.cleanForm();
          this.toastService.show('El producto se modifico correctamente', { classname: 'bg-success text-light', delay: 5000 });
        });
      }
      // this.showToast = "show";
    }
    else{
      // error de servidor
    }
  }

  changeCategoria(){
    this.bike.categoria = this.selectedCategoria;
    this.categoria_valid =  "is-valid";
  }

  changeMarca(){
    this.bike.marca = this.selectedMarca;
    this.marca_valid =  "is-valid";
  }

  cleanForm(){
  this.selectedCategoria="";
  this.selectedMarca="";
  this.bike = {
    "id": 0,
    "nombre": "",
    "descripcion": "",
    "precio": "",
    "disponible": true,
    "marca": "",
    "categoria": "",
    "imagen": "https://m.media-amazon.com/images/I/712SL7O5vmS._AC_SX425_.jpg"
};
  }

  isValid(){
    let valid = true;
    if(this.bike.nombre.length === 0){
      this.nombre_valid = "is-invalid";
      valid = false;
    }
    if(this.bike.precio.length === 0){
      this.precio_valid = "is-invalid";
      valid = false;
    }
    if(this.selectedCategoria === ""){
      this.categoria_valid =  "is-invalid";
      valid = false;
    }
    if(this.selectedMarca === ""){
      this.marca_valid =  "is-invalid";
      valid = false;
    }
    return valid;
  }

  handleNameInput(event){
    if(event.target.value.length > 0){
      this.nombre_valid = "is-valid";
    }
    else{
      this.nombre_valid = "is-invalid";
    }
  }
  handlePrecioInput(event){
    if(event.target.value.length > 0){
      this.precio_valid = "is-valid";
    }
    else{
      this.precio_valid = "is-invalid";
    }
  }
  showSuccess(){
    this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 5000 });
  }

}

