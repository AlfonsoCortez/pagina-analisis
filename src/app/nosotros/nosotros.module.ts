import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    SharedModule
  ]
})
export class NosotrosModule { }
