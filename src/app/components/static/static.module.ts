import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAdsComponent } from './ads/menu-ads/menu-ads.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../angular-material.module';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule
  ],
  declarations: [
    MenuAdsComponent,
    ContactComponent
  ],
  exports: [
    MenuAdsComponent,
    ContactComponent
  ],
  entryComponents: [
    MenuAdsComponent,
    ContactComponent
  ]
})
export class StaticModule { }
