import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {


  url = "http://localhost:3000/marcas";
  constructor(private _http: HttpClient) { }

  getMarcas(){
    return this._http.get(this.url);
  }

  postMarca(marca:any){
    return this._http.post(this.url,marca);
  }

  deleteMarca(id:number){
    return this._http.delete(this.url+"/"+id);
  }

  putMarca(marca:any){
    return this._http.put(this.url+"/"+marca.id,this.putMarca);
  }
}
