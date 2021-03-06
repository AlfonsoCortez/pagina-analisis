import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CoverComponent } from './components/cover/cover.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, CoverComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    CoverComponent
  ]
})
export class SharedModule { }
