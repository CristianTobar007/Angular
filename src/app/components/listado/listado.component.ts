import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Goku','Vegete','Tronks','Gohan'];
  NewHerores: any[] = [];
  Nuevo: string | undefined = '';

  BorrarHeroe(){
    const Heroeborrado = this.heroes.shift();
    console.log(Heroeborrado)
    
    this.NewHerores.push(Heroeborrado);
    this.Nuevo = Heroeborrado;
}

}
