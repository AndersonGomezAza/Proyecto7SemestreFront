import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ArrendatariosReadComponent } from './components/arrendatarios-read/arrendatarios-read.component';
import { PropietariosReadComponent } from './components/propietarios-read/propietarios-read.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ArriendoComponent } from './components/arriendo/arriendo.component';
import { InmuebleComponent } from './components/inmueble/inmueble.component';
import { ArreglosLocativosComponent } from './components/arreglos-locativos/arreglos-locativos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ArrendatariosReadComponent,
    PropietariosReadComponent,
    PagosComponent,
    ProyectosComponent,
    ArriendoComponent,
    InmuebleComponent,
    ArreglosLocativosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
