import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  // llamando a un archivo
  // styleUrls: ['./personas.component.css']
  // ejecutarlo en linea
  styles: [`
    h1{
      color: #000099;
    }
  `]
})
export class PersonasComponent {

  agregarPersona = false;
  agregarPersonaStatus = "No se ha agregado ninguna persona";

  constructor() {
    setTimeout(
      () => {
        this.agregarPersona = true;
    }, 3000);
  }

  onCrearPersona() {
    this.agregarPersonaStatus = "Persona agregada";
  }

}
