import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionalRoutingModule } from './institutional-routing.module';
import { AboutComponent } from './page/about/about.component';
import { ContactsComponent } from './page/contacts/contacts.component';


@NgModule({
  declarations: [AboutComponent, ContactsComponent],
  imports: [
    CommonModule,
    InstitutionalRoutingModule
  ]
})
export class InstitutionalModule { }
