import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { DbService } from './../services/db.service';
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  mainForm: FormGroup;
  Data: any[] = []
  d_uno: string="megaman1";
  d_dos: string="megaman2";
  d_tres: string = "megaman3";
  lista: string[] = ["uno", "dos"];
  xd: string;
  d: string;
  listaglobal: string[]=["xd"];
  i: number;
  x: number;
  constructor(
    private db: DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router
  ) { }


  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if (res) {
        this.db.fetchSongs().subscribe(item => {// fech
          this.Data = item
        })
      }
    });

    this.mainForm = this.formBuilder.group({
      nombre_dieta: [''],
      calorias_total: [''],
      comida: [''],
      alimentoNombre: [''],
      calorias: [''],
      cantidad: [''],
      fecha: ['']
    })
  }

  ingresarDatosLista(xd)
  {
    this.listaglobal.push(xd);
  }
  imprimirlista()
  {
    //this.lista_generica.length;
    this.x = this.listaglobal.length;
    for (this.i = 0; this.i < this.x;this.i++)
      console.log(this.listaglobal[this.i])
  }
  imprimir(d)
  {
    console.log("presionado")
    console.log(d)
  }
  storeDataVersionLuja2(xd)
  {
    this.db.addSong(
      this.xd,
      this.xd,
      this.xd,
      this.xd,
      this.xd,
      this.xd,
      this.xd
    ).then((res) => {
      this.mainForm.reset();
    })
  }
  // asise guarda cualquier info de unalabel
  storeDataVersionLuja()
  {
    this.db.addSong(
      this.d_uno,
      this.d_dos,
      this.d_tres,
      this.d_tres,
      this.d_tres,
      this.d_tres,
      this.d_tres
    ).then((res) => {
      this.mainForm.reset();
    })
  }
  /*el original*/ 
  /*storeData() {
    this.db.addSong(
      this.mainForm.value.artist,
      this.mainForm.value.song,
      this.mainForm.value.dato_dos
    ).then((res) => {
      this.mainForm.reset();
    })
  }

  deleteSong(id) {
    this.db.deleteSong(id).then(async (res) => {
      let toast = await this.toast.create({
        message: 'Song deleted',
        duration: 2500
      });
      toast.present();
    })
  }*/

}