import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreViewChildComponent } from './viewChild/padre-view-child/padre-view-child.component';
import { HijoViewChildComponent } from './viewChild/hijo-view-child/hijo-view-child.component';
import { PadreViewChildrenComponent } from './viewChildren/padre-view-children/padre-view-children.component';
import { HijoViewChildrenComponent } from './viewChildren/hijo-view-children/hijo-view-children.component';
import { PadreProyeccionComponent } from './proyeccion/padre-proyeccion/padre-proyeccion.component';
import { HijoProyeccionComponent } from './proyeccion/hijo-proyeccion/hijo-proyeccion.component';
import { ProyectadoComponent } from './proyeccion/proyectado/proyectado.component';
import { PadreEstilosComponent } from './estilos/padre-estilos/padre-estilos.component';
import { HijoEstilosComponent } from './estilos/hijo-estilos/hijo-estilos.component';
import { PadrePahComponent } from './padre-a-hijo/padre-pah/padre-pah.component';
import { HijoPahComponent } from './padre-a-hijo/hijo-pah/hijo-pah.component';
import { HijoHapComponent } from './hijo-a-padre/hijo-hap/hijo-hap.component';
import { PadreHapComponent } from './hijo-a-padre/padre-hap/padre-hap.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreViewChildComponent,
    HijoViewChildComponent,
    PadreViewChildrenComponent,
    HijoViewChildrenComponent,
    PadreProyeccionComponent,
    HijoProyeccionComponent,
    ProyectadoComponent,
    PadreEstilosComponent,
    HijoEstilosComponent,
    PadrePahComponent,
    HijoPahComponent,
    HijoHapComponent,
    PadreHapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
