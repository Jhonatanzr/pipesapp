import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent implements OnInit {
  //i18nSelect
  nombre: string = 'Jhonatan';
  genero: string = 'masculino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria','Paco','Pedro','Andrea'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  // Lo que cargo en el constructor y en el ngOninit es para generar el efecto burbuja al dar
  //clic en los p-fieldset
  constructor( private primengConfig: PrimeNGConfig ){}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  cambiarUsuario(){
    if (this.nombre == 'Jhonatan'){
      this.nombre = 'Andrea';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Jhonatan';
      this.genero = 'masculino';
    }
  }

  borrarCliente(){
    ( this.clientes.length > 0 ) ? this.clientes.pop(): this.clientes = ['Maria','Paco','Pedro','Andrea'];
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Jhonatan',
    edad: 32,
    direccion: 'Medellin, Colombia'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Ironman',
      vuela: true
    }
  ]

  //Async Pipe
  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data de la promesa');
    }, 3500 );
  });
}
