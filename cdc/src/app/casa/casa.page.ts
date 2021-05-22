import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { DbService } from './../services/db.service';
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms'; // !!!

@Component({
  selector: 'app-casa',
  templateUrl: './casa.page.html',
  styleUrls: ['./casa.page.scss'],
})
export class CasaPage implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private toast: ToastController) { }

  ngOnInit() {
  }
  mainForm: FormGroup;
  Data: any[] = []
}
