import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleAdministrativeComponent } from './administrative/detalle-administrative.component';
import { EditarAdministrativeComponent } from './administrative/editar-administrative.component';
import { MostrarAdministrativeComponent } from './administrative/mostrar-administrative.component';
import { NuevoAdministrativeComponent } from './administrative/nuevo-administrative.component';

const routes: Routes = [
  {path: '', component: MostrarAdministrativeComponent},
  {path: 'search/:id', component: DetalleAdministrativeComponent},
  {path: 'update/:id', component:EditarAdministrativeComponent},
  {path: 'nuevo', component: NuevoAdministrativeComponent},
  {path: 'findAll', component: MostrarAdministrativeComponent},
  {path: '**', redirectTo: '',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
