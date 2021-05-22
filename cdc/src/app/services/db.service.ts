
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Song } from './song';//--
import { Dietas } from './dietas';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})

export class DbService {
  private storage: SQLiteObject;
  songsList = new BehaviorSubject([]);
  //dietaList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'positronx_db.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeData();
        });
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  fetchSongs(): Observable<Song[]> {// revisarrrrrr°°°°°||||
    return this.songsList.asObservable();
  }

  /*fetchDietas(): Observable<Dietas[]>{// apara el mio
    return this.dietaList.asObservable();
  }*/

  // Render fake data
  getFakeData() {
    this.httpClient.get(
      'assets/dump.sql',
      { responseType: 'text' }
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.storage, data)
        .then(_ => {
          this.getSongs();
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }

  // Get list hay dos del mismo get 
  getSongs() {
    return this.storage.executeSql('SELECT * FROM dietass', []).then(res => {
      let items: Song[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id:             res.rows.item(i).id,
            nombre_dieta:   res.rows.item(i).nombre_dieta,
            calorias_total: res.rows.item(i).calorias_total,
            comida:         res.rows.item(i).comida,
            alimentoNombre: res.rows.item(i).alimentoNombre,
            calorias:       res.rows.item(i).calorias,
            cantidad:       res.rows.item(i).cantidad,
            fecha:          res.rows.item(i).fecha
          });
        }
      }
      this.songsList.next(items);
    });
  }



  // Add
  addSong(nombre_dieta, calorias_total, comida, alimentoNombre, calorias, cantidad, fecha) {
    let data = [nombre_dieta, calorias_total, comida, alimentoNombre, calorias, cantidad, fecha];
          return this.storage.executeSql('INSERT INTO dietass (nombre_dieta, calorias_total,comida,alimentoNombre,calorias,cantidad,fecha) VALUES (?,?,?,?,?,?,?)', data)
      .then(res => {
        this.getSongs();
      });
  }


  // Get single object
  /*seguro que el id es el del app.modules donde le pones id a la pagina o algo asi */
  getSong(id): Promise<Song> {
    return this.storage.executeSql('SELECT * FROM dietass WHERE id = ?', [id]).then(res => {
      return {
        id:             res.rows.item(0).id,
        nombre_dieta:   res.rows.item(0).nombre_dieta,
        calorias_total: res.rows.item(0).calorias_total,
        comida:         res.rows.item(0).comida,
        alimentoNombre: res.rows.item(0).alimentoNombre,
        calorias:       res.rows.item(0).calorias,
        cantidad:       res.rows.item(0).cantidad,
        fecha:          res.rows.item(0).fecha
      }
    });
  }
  //-------

  // Update
  updateSong(id, song: Song) {
    let data = [song.nombre_dieta, song.calorias_total, song.comida, song.alimentoNombre, song.calorias, song.cantidad, song.fecha];
    return this.storage.executeSql(`UPDATE dietass SET nombre_dieta = ?, calorias_total = ?, comida=? ,alimentoNombre=?,calorias=?,cantidad=?,fecha=? WHERE id = ${id}`, data)
      .then(data => {
        this.getSongs();
      })
  }

  // Delete
  deleteSong(id) {
    return this.storage.executeSql('DELETE FROM dietass WHERE id = ?', [id])
      .then(_ => {
        this.getSongs();
      });
  }
  ///////////////////////////////////////////////////////////////////////////////////
  // funciones para guardar solo los nombres de las dietas !!!!!!!!!!
  ///////////////////////////////////////////////////////////
  /*getDietas() {
    return this.storage.executeSql('SELECT * FROM Dietas', []).then(res => {
      let items: Dietas[] = [];
      if (res.rows.legth > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            nombre: res.rows.item(i).nombre,
            calorias: res.rows.item(i).calorias
          });
        }
      }
      this.dietaList.next(items);
    });
  }
  addDieta(nombre, calorias) {
    let data = [nombre, calorias];
    return this.storage.executeSql('INSERT INTO Dietas (nombre, calorias) VALUES (?,?)', data)
      .then(res => {
        this.getDietas();
      });
  }
  getDieta(id): Promise<Dietas> {
    return this.storage.executeSql('SELECT * FROM Dietas WHERE id = ?', [id]).then(res => {
      return {
        id: res.row.item(0).id,
        nombre: res.row.item(0).nombre,
        calorias: res.row.item(0).calorias
      }
    });
  }*/
}