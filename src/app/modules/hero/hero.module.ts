import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroComponent } from './page/hero/hero.component';
import { HeroDetalheComponent } from './page/hero-detalhe/hero-detalhe.component';
import { HeroUpdateComponent } from './page/hero-update/hero-update.component';
import { HeroInsertComponent } from './page/hero-insert/hero-insert.component';


@NgModule({
  declarations: [HeroComponent, HeroDetalheComponent, HeroUpdateComponent, HeroInsertComponent],
  imports: [
    CommonModule,
    HeroRoutingModule
  ]
})
export class HeroModule { }
