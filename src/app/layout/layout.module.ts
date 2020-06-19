import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './../shared/shared.module';
import { BannerComponent } from './components/banner/banner.component';
import { InfoprincipalComponent } from './components/infoprincipal/infoprincipal.component';
import { InfosecundariaComponent } from './components/infosecundaria/infosecundaria.component';
import { InfoterciariaComponent } from './components/infoterciaria/infoterciaria.component';

@NgModule({
  declarations: [HomeComponent,
    BannerComponent,
    InfoprincipalComponent,
    InfosecundariaComponent,
    InfoterciariaComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
