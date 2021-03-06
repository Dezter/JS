import { Component } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {

  constructor() {
    setTimeout(() => {
      this.addedPeople = false;
    }, 3000);
  }

  names = [{
    name: 'Leonard',
    status: true
  },
  {
    name: 'Penny',
    status: false
  },
  {
    name: 'Sheldo',
    status: false
  }
];

  hola = 'on the People';
  people = 'Daniel';
  private Age = 24;

  personAdded = true;
  personaName = '';
  addedPeople = true;
  modificar = 'Cantidad';
  val1: number = null;
  val2: number = null;
  valResfull: number = null;

  getAge = () => this.Age;

  onCreatedPerson = () => {
    this.personAdded = false;
  }

  modificarPersona = (event: Event) => {
    this.personaName = (<HTMLInputElement>event.target).value;
  }

  calculated = (tipo: string) => {
    if (tipo === 'sum') {
      return this.valResfull = (Number(this.val1) + Number(this.val2));
    }
    if (tipo === 'rest') {
      return this.valResfull = (Number(this.val1) - Number(this.val2));
    }
    if (tipo === 'multi') {
      return this.valResfull = (Number(this.val1) * Number(this.val2));
    }
    if (tipo === 'div') {
      return this.valResfull = (Number(this.val1) / Number(this.val2));
    }
  }
}
