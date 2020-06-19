import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
// import { LayoutComponent } from './components/layout/layout.component';
// import { InicioComponent } from './components/inicio/inicio.component';
// import { NosotrosComponent } from './components/nosotros/nosotros.component';
// import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  }
];

@NgModule({
  imports:  [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
