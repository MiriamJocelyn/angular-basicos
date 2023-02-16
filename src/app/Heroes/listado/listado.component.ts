import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
heroes : string[] = ['Spiderman','Thor','Hulk','IronMan','Capitan America']
heroeBorrado : string=''
addHeroe() {
this.heroes.push('Avispa');
}

borrarHeroe(){
 this.heroeBorrado = this.heroes?.shift() || "";
}
}