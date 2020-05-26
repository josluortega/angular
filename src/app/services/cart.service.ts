import { Injectable } from '@angular/core';
import { products } from '../products';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [] ;//definimos un arreglo para agregar los productos

  constructor() { }

//Este metodo permitira agregar productos al carrito
addProduct(product){
  this.items.push(product);
}

//Este metodo permitira obtener todo los elementos del carrito
getItems(){
  return this.items;
}
 //Este metodo permite limpiar el contenido del carrito y 
 //regresa el arreglo vacio
clearCart(){
  this.items=[];
  return this.items;
}

}