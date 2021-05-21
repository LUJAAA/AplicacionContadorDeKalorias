import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CasaPageRoutingModule } from './casa-routing.module';
import { CasaPage } from './casa.page';
import { FormBuilder } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms'; // !!!

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasaPageRoutingModule, 
  ],
  declarations: [CasaPage,]
})
export class CasaPageModule {}
