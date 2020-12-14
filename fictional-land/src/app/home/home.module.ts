import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ControlMenuComponent } from './control-menu/control-menu.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';



@NgModule({
  declarations: [AboutPageComponent, ContactPageComponent, ControlMenuComponent, HomePageComponent, PrivacyPageComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
