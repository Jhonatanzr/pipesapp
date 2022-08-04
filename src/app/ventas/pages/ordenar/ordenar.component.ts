import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  estadoPipe: boolean = true;
  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Acua-man',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Iron-man',
      vuela: true,
      color: Color.rojo
    }
  ]

  cambiarEstado(){
    this.estadoPipe = !this.estadoPipe;
  }

  cambiarOrden( value: string ){
   this.ordenarPor = value;
  }

}
