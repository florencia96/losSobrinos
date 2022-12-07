import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Variedad } from './variedad-list/Variedad';

@Injectable({
  providedIn: 'root'
})
export class VariedadCarritoService {
  private _cartList:Variedad[]=[]
  cartList:BehaviorSubject<Variedad[]>=new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(variedad: Variedad) {
    let item=this._cartList.find((v1)=>v1.nombre==variedad.nombre);
    if(!item){
    this._cartList.push({...variedad});
    }else{
      item.cantidad+=variedad.cantidad;
    }
    console.log(this._cartList.length);
    this.cartList.next(this._cartList);
  }

  

  
}
