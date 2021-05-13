import { Component, OnInit } from '@angular/core';
////////////////
//import { Component, OnInit } from '@angular/core';
/*import { FormGroup, FormBuilder } from "@angular/forms";
import { DbService } from '../../services/db.service';
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";*/
///////////
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }
  ngOnInit() {}
  /*
  constructor(private db: DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router) { }
  mainForm: FormGroup;
  Data: any[] = []
  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if (res) {
        this.db.fetchSongs().subscribe(item => {
          this.Data = item
        })
      }
    });

    this.mainForm = this.formBuilder.group({
      artist: [''],
      song: ['']
    })

    
  }
  storeData() {
    this.db.addSong(
      this.mainForm.value.artist,
      this.mainForm.value.song
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
