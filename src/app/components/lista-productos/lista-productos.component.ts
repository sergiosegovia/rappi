import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
  providers: [ ProductosService ]
})
export class ListaProductosComponent implements OnInit {
  public producto : Producto;
  public productos : any;
  public error : any;

  constructor(private _productosService : ProductosService) {
    this.productos = _productosService.getProductos();
  }

  ngOnInit() {
    this.getProductos();
  }

  getProductos() {
    this._productosService.getProductos()
                          .subscribe(
                            result => {
                              this.productos = result;
                              console.log(this.productos);
                            },
                            error => {
                              this.error = error;
                            }
                          )
  }

}
