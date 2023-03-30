import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//componentes
import { AgregarEditarMascotaComponent } from './components/agregar-editar-mascota/agregar-editar-mascota.component';
import { ListadoMascotaComponent } from './components/listado-mascota/listado-mascota.component';
import { VerMascotaComponent } from './components/ver-mascota/ver-mascota.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular material
import { MaterialModule } from './material/material.module';

//spinner
import { SpinnerComponent } from './shared/spinner/spinner.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarMascotaComponent,
    ListadoMascotaComponent,
    VerMascotaComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
