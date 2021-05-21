import { Component, OnInit } from '@angular/core';
// importaciones para sqlite //
import { FormGroup, FormBuilder } from "@angular/forms";
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";
///-------------------------------------//
import { DbService } from '../../services/db.service';
import { Photo } from 'src/app/interfaces/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-historial-dietas',
  templateUrl: './historial-dietas.page.html',
  styleUrls: ['./historial-dietas.page.scss'],
})
export class HistorialDietasPage implements OnInit {

  // fotos
  public photo: Photo[] = [];
  photos: Photo[];
  // sqlite
  mainForm: FormGroup;
  Data: any[] = []
  //----//
  ver: boolean = false;
  ver1: boolean = true;
  // variables para la parte de mostrar los datos //
  c_desayuno: boolean = false;
  c_marienda: boolean = false;
  c_comida: boolean = false;
  c_entrecomida: boolean = false;
  c_cena: boolean = false;
  // ----------------------------------------------//
  l_deyauno: Array<any> = [];
  l_meridenda: Array<any> = [];
  l_comida: Array<any> = [];
  l_entrecomida: Array<any> = [];
  l_cena: Array<any> = [];
  l_nombres_dietas: Array<any> = [];
  constructor(public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router,
    private db: DbService,
    private photoSvc: PhotoService) { }

  ngOnInit() {
    // fotos 
    this.photoSvc.loadSaved().then(() => {
      this.photos = this.photoSvc.getPhotos();
    });
    // aqui se muestran los datos 
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
    //this.cargarInfo()
  }

  totalDietasCreadas: number = 2;
  numeroDietaActual: number = 0;
  nombresDietas: String[] = ["Por Defecto","xddddd","DDDDDDD"];
  cantidadCalorias: number[] = [2000,5000,3000];
  fechaCreacion: String[] = ["19-04-2021","185/52/52","65/98/14"];

  public newPhoto(): void {
    this.photoSvc.addNewToGallery()
  }
  deleteTask(index) {
    this.photos.splice(index, 1);

  }

  Izquierda()
  {
    if (this.numeroDietaActual <= 0)
      this.numeroDietaActual = this.totalDietasCreadas;
    else
      this.numeroDietaActual--;
  }

  Derecha()
  {
    if (this.numeroDietaActual >= this.totalDietasCreadas)
      this.numeroDietaActual = 0;
    else
      this.numeroDietaActual++;
  }

  // Se muestra los alimentos de todas las comidas sin importar la dieta
  // de momento solo refleja que se guardan los datos
  // aun esta desordenado
  cargarInfo()
  {
    var i: number;
    var f: number;
    var com: number;
    // vemos la longitud de la lista donde se almacenan todos lo datos de las dietas
    var longitud: number;
    longitud = this.Data.length;
    console.log("long: " + longitud);
    // detecto las comida que se hicieron
    for (i = 0; i < longitud; i++)
    {
      if (this.Data[i].comida = "Desayuno")
        this.c_desayuno = true;
      if (this.Data[i].comida = "Merienda")
        this.c_marienda = true;
      if (this.Data[i].comida = "Comida")
        this.c_comida = true;
      if (this.Data[i].comida = "Entrecomida")
        this.c_entrecomida = true;
      if (this.Data[i].comida = "Cena")
        this.c_cena = true;
    }
    // ingreso los alimentos de cada comida
    f = 0;
    if (this.c_desayuno = true) {
      console.log("DESAYUNO");
      for (f = 0; f < longitud; f++) {
        
        if (this.Data[f].comida = "Desayuno") {
          this.l_deyauno.push({
            nombre: this.Data[f].alimentoNombre,
            calorias: this.Data[f].calorias,
            cantidad: this.Data[f].cantidad
          });
          
          console.log("Alimento:" + this.Data[f].alimentoNombre);
          console.log("Calorias:" + this.Data[f].calorias);
          console.log("Cantidad:" + this.Data[f].cantidad);
        }
   
      }
    }
    f = 0;
    if (this.c_marienda = true) {
      console.log("MERIENDA");
      for (f = 0; f < longitud; f++) {
       
        if (this.Data[f].comida = "Merienda") {
          this.l_meridenda.push({
            alimentoNombre: this.Data[f].alimentoNombre,
            calorias: this.Data[f].calorias,
            cantidad: this.Data[f].cantidad
          });
          
          console.log("Alimento:" + this.Data[f].alimentoNombre);
          console.log("Calorias:" + this.Data[f].calorias);
          console.log("Cantidad:" + this.Data[f].cantidad);
        }
      }
    }
    if (this.c_comida = true) {
      console.log("COMIDA");
      for (f = 0; f < longitud; f++) {
      
        if (this.Data[f].comida = "Comida") {
          console.log("Alimento:" + this.Data[f].alimentoNombre);
          console.log("Calorias:" + this.Data[f].calorias);
          console.log("Cantidad:" + this.Data[f].cantidad);
        }
      }
     }
    if (this.c_entrecomida = true) {
      console.log("ENTRECOMIDA");
      for (f = 0; f < longitud; f++) {
    
        if (this.Data[f].comida = "Entrecomida") {
          console.log("Alimento:" + this.Data[f].alimentoNombre);
          console.log("Calorias:" + this.Data[f].calorias);
          console.log("Cantidad:" + this.Data[f].cantidad);
        }
      }
     }
    if (this.c_cena = true) {
      console.log("CENA");
      for (f = 0; f < longitud; f++) {
        
        if (this.Data[f].comida = "Cena") {
          console.log("Alimento:" + this.Data[f].alimentoNombre);
          console.log("Calorias:" + this.Data[f].calorias);
          console.log("Cantidad:" + this.Data[f].cantidad);
        }
      }
     }

  }

  verdeadeveras()
  {
    this.ver = true;
    this.ver1 = false;
  }
}
