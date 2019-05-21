import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderModalsModule } from './shared/render-modals.module';
import { StaticModule } from '../static/static.module';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../angular-material.module';
import { FormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public.routes';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ParticlesModule } from 'angular-particle';

@NgModule({
  imports: [
    CommonModule,
    RenderModalsModule,
    StaticModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule,
    PublicRoutingModule,
    ParticlesModule
  ],
  declarations: [
    EcommerceComponent
  ]
})
export class PublicModule { }
