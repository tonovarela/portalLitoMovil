import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [HeaderComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ],
  exports: [ HeaderComponent, MenuComponent]
})
export class ComponentsModule { }
