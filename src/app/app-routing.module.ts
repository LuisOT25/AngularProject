import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Automoviles } from './Automoviles/Automoviles.component';
import { DetalleAutomovilComponent } from './detalle-automovil/detalle-automovil.component';
import { EjemploBasico } from './EjemploBasico/EjemploBasico.component';
import { FormularioAutomovilComponent } from './formulario-automovil/formulario-automovil.component';

const routes: Routes = [
  {
    path:'automoviles',
    component: Automoviles
  },
  {
    path: '',
    component: EjemploBasico
  },
  {
    path:'automoviles/create',
    component: FormularioAutomovilComponent
  },
  {
    path:'automoviles/:id',
    component: DetalleAutomovilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
