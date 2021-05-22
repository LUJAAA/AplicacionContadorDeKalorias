
import { Component } from '@angular/core';
import { AlimentoService } from './Servicios/alimento.service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
//import { platform } from 'node:process';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private alimentoService: AlimentoService,
    public sQLite: SQLite
  ) {

  }


}
