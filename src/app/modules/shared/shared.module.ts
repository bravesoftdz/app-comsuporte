import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page404/page404.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/components/navbar/navbar.component';



@NgModule({
  declarations: [Page404Component, FooterComponent, HeaderComponent, NavbarComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
