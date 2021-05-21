import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Para habilitar el uso de httpclient, tambien lo agregamos a imports


import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';// con esto jalo lo de la base de datos 
// los agregados 
import { SQLite } from '@ionic-native/sqlite/ngx';
import { HttpClientModule } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx'

// importe las paginas 
// importe el servicio 

//import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
//import { SQLitePorter } from '@ionic-native/sqlite/ngx';
//import { SQLite } from '@ionic-native/sqlite/ngx';

@NgModule({
  declarations: [
    AppComponent,],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule],
  providers: [
    SQLite,
    SQLitePorter,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [
    AppComponent],
})
export class AppModule {}
