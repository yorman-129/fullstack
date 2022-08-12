import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DetalleAdministrativeComponent} from './administrative/detalle-administrative.component';
import {EditarAdministrativeComponent} from './administrative/editar-administrative.component';
import {ListaAdministrativeComponent} from './administrative/lista-administrative.component';
import {NuevoAdministrativeComponent} from './administrative/nuevo-administrative.component';


import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MostrarAdministrativeComponent } from './administrative/mostrar-administrative.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalleAdministrativeComponent,
    EditarAdministrativeComponent,
    ListaAdministrativeComponent,
    NuevoAdministrativeComponent,
    MostrarAdministrativeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
