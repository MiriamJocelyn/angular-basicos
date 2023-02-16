import { NgModule } from "@angular/core";
import { HeroComponent } from './heroe.component';
import { ListadoComponent } from '../listado/listado.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        HeroComponent,
        ListadoComponent
    ],
    imports:[
        CommonModule
    ],
    exports:  //esta exportacion es para que el componente pueda ser visto en algun otro modulo. 
    [
        ListadoComponent
    ]
})

export class HeroeModule{}