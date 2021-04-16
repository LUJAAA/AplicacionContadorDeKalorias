import { Component, OnInit } from '@angular/core';
import { AlimentoService } from '../../Servicios/alimento.service';// importo el servico
import { Alimentos } from '../../interfaces/alimento';// importo la interface

@Component({
  selector: 'app-seleccion-alimentos',
  templateUrl: './seleccion-alimentos.page.html',
  styleUrls: ['./seleccion-alimentos.page.scss'],
})
export class SeleccionAlimentosPage implements OnInit {

  // Esto se usa para mostrar los datos obtenidos de la llamada de la api en la aplicacion, pero no se como funciona xd
  alimentos: Alimentos[] = [];
  // contiene el texto del buscador de selecciondealimentos.page.html debe llamarse igual
  alimentoABuscar: string;

  constructor(private alimentoservices: AlimentoService) { }

  ngOnInit() {
  }

  // le pongo el mismo nombre que la funcion del servicio, la funcion solo muestra los resulultados por consola
  ObtenerUnAlimento() {
    //ObtenerUnAlimento(this.alimentoABuscar) aqui se agrega el alimento que queremos buscar
    this.alimentoservices.ObtenerUnAlimento(this.alimentoABuscar).subscribe
      (alimentos => { console.log(alimentos) });
  }

}
