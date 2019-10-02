import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent  {

  nombrePersona: string = 'Marco';
  apellidoPersona: string = 'Ruvalcaba';
  private edadPersona: number = 47;

  // mostrar la edad mediante un metodo

  getEdad(): number {
    return this.edadPersona;
  }

}
