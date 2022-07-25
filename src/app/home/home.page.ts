import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  actividadItem: any[] = [];
  actividad: actividad = new actividad();
  isDisplay: boolean = true;
  actividadId: number;
  constructor() {
    
  }
   
  format(){
    this.actividad = new actividad();
  }
  
 
  onSubmit() {
    if(this.actividadId) {
      this.actividadItem[this.actividadId] = JSON.parse(JSON.stringify(this.actividad));
      this.format();
    }
    else {
      this.actividadItem.push(JSON.parse(JSON.stringify(this.actividad)));
      this.format();
    }
  }
  remove(id) {
    this.actividadItem.splice(id, 1);
  }
  edit(id) {
    this.actividad = this.actividadItem[id];
    this.actividadId = id
    
  }

}

export class actividad {
  nombre: string;
  apellido: string;
  fecha!: string;
  edad: string;
  asunto!: string;
  id!: string;
}
