import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductosService {

  constructor(private _http : Http) {}

  getProductos(){
    return this._http.get('https://raw.githubusercontent.com/sergiosegovia/rappi/master/src/app/models/productos.json')
                     .map( res => res.json());
  }                

}
