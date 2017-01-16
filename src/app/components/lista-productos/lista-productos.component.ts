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
  public notBestSeller : any;

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

  getBestSellers(){
    var x = document.getElementsByClassName('not-best-seller')
    for (var i = 0; i < x.length; i++) {
      x[i].classList.add('hidden');
    }

    var y = document.getElementsByClassName('best-seller')
    for (var i = 0; i < y.length; i++) {
      y[i].classList.remove('hidden');
    }
  }

  getNotAvailables(){
    var x = document.getElementsByClassName('not-available');
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove('hidden');
    }

    var y = document.getElementsByClassName('available');
    for (var i = 0; i < y.length; i++) {
      y[i].classList.add('hidden');
    }
  }

  getAvailables(){
    var x = document.getElementsByClassName('available');
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove('hidden');
    }

    var y = document.getElementsByClassName('not-available');
      for (var i = 0; i < y.length; i++) {
        y[i].classList.add('hidden');
      }
  }

}
