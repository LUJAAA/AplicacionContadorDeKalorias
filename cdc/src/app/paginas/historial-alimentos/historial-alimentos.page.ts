import { Component, OnInit } from '@angular/core';
import { AlimentoService } from '../../Servicios/alimento.service';
import { Alimentos } from '../../interfaces/alimento';

@Component({
  selector: 'app-historial-alimentos',
  templateUrl: './historial-alimentos.page.html',
  styleUrls: ['./historial-alimentos.page.scss'],
})
export class HistorialAlimentosPage implements OnInit {

  alimentos:Alimentos[]=[];
  
  constructor(private alimentoservices: AlimentoService) { }

  ngOnInit() {}
      /*this.taskService.getAllTasks()
      .subscribe(tasks => {
        console.log(tasks);
      });*/

}
