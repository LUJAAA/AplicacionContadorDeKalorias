import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ConfigurarDietaPageRoutingModule } from './configurar-dieta-routing.module';
import { ConfigurarDietaPage } from './configurar-dieta.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// ya
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ConfigurarDietaPageRoutingModule
  ],
  declarations: [ConfigurarDietaPage]
})
export class ConfigurarDietaPageModule {}
