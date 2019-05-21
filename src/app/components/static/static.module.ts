import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAdsComponent } from './ads/menu-ads/menu-ads.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule
  ],
  declarations: [
    MenuAdsComponent
  ],
  exports: [
    MenuAdsComponent
  ],
  entryComponents: [
    MenuAdsComponent
  ]
})
export class StaticModule { }
