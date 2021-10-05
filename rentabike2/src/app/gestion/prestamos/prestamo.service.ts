import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  url = "http://localhost:3000/prestamos";
  constructor(private _http: HttpClient) { }

  getPrestamos(){
    return this._http.get(this.url);
  }

  postPrestamo(prestamo:any){
    return this._http.post(this.url,prestamo);
  }

  deletePrestamo(id:number){
    return this._http.delete(this.url+"/"+id);
  }

  putPrestamo(prestamo:any){
    return this._http.put(this.url+"/"+prestamo.id,prestamo);
  }

  getById(id:number){
    return this._http.get(this.url + "/" + id);
  }
}
