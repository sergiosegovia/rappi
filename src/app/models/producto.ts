export class Producto{
  constructor(
    public id : number,
    public name : string,
    public price : string,
    public available : boolean,
    public best_seller : boolean,
    public categories : any,
    public img : string,
    public description : string
  ){
  }
}
