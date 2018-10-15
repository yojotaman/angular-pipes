import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-pipes';
  nombre = 'Jonathan';
  nombre2 = 'jonAThan salaZAR galeaNo';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;

  curso = {
    nombre: 'Analitica de las cosas',
    profesor: 'Jonathan Salazar',
    level: 'IoT Gand Master',
    coordenadas: {
      long: '12345',
      lat: '56789'
    }
  };

  valorPromesa = new Promise ( ( resolve, reject ) => {
    setTimeout( () => resolve ('llegó la data'), 3500);
  });

  fecha = new Date();

  video = 'r9E4rosb3Ng';

  activar = true;

}
