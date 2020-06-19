import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ContenedorComponent } from './contenedor/contenedor.component';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () =>
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./nosotros/nosotros.module').then(m => m.NosotrosModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule)
  }

];

@NgModule({
  imports:  [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
