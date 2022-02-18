import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [
    {
      _id:"1", nome:"Angular", categoria:"Font"
    }
  ];

  //colunas que fazem lenk com o datasource
  displayedColumns = ['nome', 'categoria'];

  constructor() {
    //this.cursos = [];
  }

  ngOnInit(): void {}
}
