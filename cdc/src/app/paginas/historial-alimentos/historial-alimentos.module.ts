import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { HistorialAlimentosPageRoutingModule } from './historial-alimentos-routing.module';

import { HistorialAlimentosPage } from './historial-alimentos.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HistorialAlimentosPageRoutingModule
  ],
  declarations: [HistorialAlimentosPage]
})
export class HistorialAlimentosPageModule {}
