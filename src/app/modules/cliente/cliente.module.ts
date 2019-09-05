import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './page/cliente/cliente.component';
import { ClienteDetalheComponent } from './page/cliente-detalhe/cliente-detalhe.component';
import { ClienteUpdateComponent } from './page/cliente-update/cliente-update.component';
import { ClienteInsertComponent } from './page/cliente-insert/cliente-insert.component';


@NgModule({
  declarations: [ClienteComponent, ClienteDetalheComponent, ClienteUpdateComponent, ClienteInsertComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
