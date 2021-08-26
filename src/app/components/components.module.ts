import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TarjetaPresentacionComponent } from './tarjeta-presentacion/tarjeta-presentacion.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    TarjetaPresentacionComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    TarjetaPresentacionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class ComponentsModule { }
