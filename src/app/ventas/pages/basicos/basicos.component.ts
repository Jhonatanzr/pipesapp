import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower: string = 'jhonatan';
  nombreUpper: string = 'JHONATAN';
  nombreCompleto: string = 'jhOnAtan zApatA';

  fecha: Date = new Date();

}
