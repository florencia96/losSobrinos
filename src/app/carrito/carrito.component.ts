import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VariedadCarritoService } from '../variedad-carrito.service';
import { Variedad } from '../variedad-list/Variedad';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  
  cartList$: Observable<Variedad[]>;
  constructor( private cart:VariedadCarritoService) { 
    this.cartList$=cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
