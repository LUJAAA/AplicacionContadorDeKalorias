import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { HistorialDietasPageRoutingModule } from './historial-dietas-routing.module';

import { HistorialDietasPage } from './historial-dietas.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HistorialDietasPageRoutingModule
  ],
  declarations: [HistorialDietasPage]
})
export class HistorialDietasPageModule {}
