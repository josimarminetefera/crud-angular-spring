import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//1 Adicionar o model
import { MatTableModule } from '@angular/material/table';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';

//2 Adicionar o import do novo model
@NgModule({
  declarations: [CursosComponent],
  imports: [CommonModule, CursosRoutingModule, MatTableModule],
})
export class CursosModule {}
