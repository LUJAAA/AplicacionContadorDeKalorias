import { HistorialAlimentosPage } from './../historial-alimentos/historial-alimentos.page';
import { Component, OnInit } from '@angular/core';
import { NavController,ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {


  notas: any = [{ titulo: 'titulo1', texto: 'textoo' }];
  constructor(private router: Router,
    public modalController: ModalController,
    public sQLite: SQLite
  ) { /*this.ObtenerNotas() */}
  ngOnInit() {}
/*
  ObtenerNotas()
  {
    this.baseAlimentosDietasService.TomarNotas().
      then(notas => { this.notas = notas; }).
      catch(error => { console.log(error) });
  }

  getItems($event)
  {
    const valor = $event;
    console.log(valor);
  }

  AgregarNota()
  {
    //this.navCtrl.goForward(HistorialAlimentosPage);
    return this.router.navigateByUrl('/historial-alimentos');
  }

  editar(item)
  {
    console.log("editar");
    // var modal = this.modalController.create(HistorialAlimentosPage);
    // modal.onDid
    // var modal = await this.modalController.create({ HistorialAlimentosPage });
    // modal.present();
  }

  eliminar(item)
  {
    console.log("eliminar");
  }*/
}
