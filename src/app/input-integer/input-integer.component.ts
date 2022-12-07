import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Variedad } from '../variedad-list/Variedad';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  cantidad : number=0;

  @Input()
  max:number=0;

  @Output()
  cantidadChange:EventEmitter<number>=new EventEmitter<number>();

  @Output()
  maxReached:EventEmitter<string>=new EventEmitter<string>();


  variedad!: Variedad;

  ngOnInit(): void {
  }

  sumarCantidad():void{
    if(this.cantidad<this.max){
    this.cantidad++;
      this.cantidadChange.emit(this.cantidad);  
    } else{
      this.maxReached.emit("se alcanzo el maximo");
    }
    
  }

  restarCantidad():void{
    if(this.cantidad>0){
    this.cantidad--;  
    this.cantidadChange.emit(this.cantidad);
    }
    
  }

  cambiarCantidad(event: { key: any; }):void{
    console.log(event.key);
    this.cantidadChange.emit(this.cantidad);
  }

}
