import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductosService {

  constructor(private _http : Http) {}

  getProductos(){
    return this._http.get('./productos.json')
                     .map( res => res.json());
  }

}
