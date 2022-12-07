import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LosSobrinosContactoComponent } from './los-sobrinos-contacto/los-sobrinos-contacto.component';
import { LosSobrinosPromocionesComponent } from './los-sobrinos-promociones/los-sobrinos-promociones.component';
import { LosSobrinosVariedadesComponent } from './los-sobrinos-variedades/los-sobrinos-variedades.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'variedades',
    pathMatch: 'full'
  },

  {
    path:'variedades',
    component:LosSobrinosVariedadesComponent
  },
  {
    path:'promociones',
    component:LosSobrinosPromocionesComponent
  },
  {
    path:'contacto',
    component:LosSobrinosContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
