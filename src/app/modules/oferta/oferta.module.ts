import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertaComponent } from './page/oferta/oferta.component';
import { OfertaDetalheComponent } from './page/oferta-detalhe/oferta-detalhe.component';
import { OfertaUpdateComponent } from './page/oferta-update/oferta-update.component';
import { OfertaInsertComponent } from './page/oferta-insert/oferta-insert.component';



@NgModule({
  declarations: [OfertaComponent, OfertaDetalheComponent, OfertaUpdateComponent, OfertaInsertComponent],
  imports: [
    CommonModule
  ]
})
export class OfertaModule { }
