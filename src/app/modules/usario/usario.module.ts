import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsarioRoutingModule } from './usario-routing.module';
import { UsarioComponent } from './page/usario/usario.component';
import { LoginComponent } from './page/login/login.component';
import { UsarioDetalheComponent } from './page/usario-detalhe/usario-detalhe.component';
import { UsarioUpdateComponent } from './page/usario-update/usario-update.component';
import { UsarioInsertComponent } from './page/usario-insert/usario-insert.component';


@NgModule({
  declarations: [UsarioComponent, LoginComponent, UsarioDetalheComponent, UsarioUpdateComponent, UsarioInsertComponent],
  imports: [
    CommonModule,
    UsarioRoutingModule
  ]
})
export class UsarioModule { }
