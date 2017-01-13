import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ListaProductosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
