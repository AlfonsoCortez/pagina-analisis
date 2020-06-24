import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from './../shared/shared.module';
import { FormularioComponent } from './components/formulario/formulario.component';

import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [MainComponent, FormularioComponent],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ContactoModule { }
