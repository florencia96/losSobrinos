import { Component, OnInit } from '@angular/core';
import { VariedadCarritoService } from '../variedad-carrito.service';
import { Variedad } from './Variedad';

@Component({
  selector: 'app-variedad-list',
  templateUrl: './variedad-list.component.html',
  styleUrls: ['./variedad-list.component.scss']
})
export class VariedadListComponent implements OnInit {

  variedades : Variedad []= [
    {
    nombre:'carne',
    precio:60,
    stock: 10,
    image:'assets/img/carne.jpeg',
    clearance:true,
    cantidad:0
  },
  {
    nombre:'pollo',
    precio: 60,
    stock: 5,
    image:'assets/img/pollo.jpeg',
    clearance:false,
    cantidad:0
  },
  {
    nombre:'jamon y queso',
    precio:60,
    stock: 0,
    image:'assets/img/jamon.jpeg',
    clearance: false,
    cantidad:0
  }
]
  


  constructor(private carrito:VariedadCarritoService) { 
    //this.cart=new VariedadCarritoService();
  }

  ngOnInit(): void {
  }

  addToCart(variedad:Variedad):void{
    this.carrito.addToCart(variedad);
    variedad.stock-=variedad.cantidad;
    variedad.cantidad=0;
  }

 maxReached(m:string){
  alert(m);
 }

}
