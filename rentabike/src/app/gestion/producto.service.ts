import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url ="http://localhost:3000/bikes";
  constructor(private _http:HttpClient) {  
   }

   getBikes(){
     return this._http.get(this.url);
   }

   
  postBike(bike:any){
    return this._http.post(this.url,bike);
  }

  deleteBike(id:number){
    return this._http.delete(this.url+"/"+id);
  }

  putBike(bike:any){
    return this._http.put(this.url+"/"+bike.id,bike);
  }

  getById(id:number){
    return this._http.get(this.url + "/" + id);
  }
}
