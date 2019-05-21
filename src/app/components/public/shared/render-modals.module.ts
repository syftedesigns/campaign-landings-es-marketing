import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../../angular-material.module';
import { GeneratorTextComponent } from './ecommerce-modal/generator-text.component';
import { EcommerceModalComponent } from './ecommerce-modal/ecommerce-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule
  ],
  declarations: [
    GeneratorTextComponent,
    EcommerceModalComponent,
    LoaderComponent
  ],
  exports: [
    GeneratorTextComponent,
    EcommerceModalComponent,
    LoaderComponent
  ],
  entryComponents: [
    GeneratorTextComponent,
    EcommerceModalComponent,
    LoaderComponent
  ]
})
export class RenderModalsModule { }
