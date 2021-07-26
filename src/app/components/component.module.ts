import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { CrackComponent } from './crack/crack.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContadorComponent } from './contador/contador/contador.component';



@NgModule({
  declarations: [
    ListadoComponent,
    CrackComponent,
    CalculadoraComponent,
    ContadorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListadoComponent,
    CrackComponent,
    CalculadoraComponent,
    ContadorComponent,
  ]
})
export class ComponentModule { }
