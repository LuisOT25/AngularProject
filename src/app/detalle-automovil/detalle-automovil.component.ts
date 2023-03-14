import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Automovil } from '../Automoviles/Automovil.model';
import { Automovilservice } from '../Automoviles/Automoviles.service';

@Component({
  selector: 'app-detalle-automovil',
  templateUrl: './detalle-automovil.component.html',
  styleUrls: ['./detalle-automovil.component.css']
})
export class DetalleAutomovilComponent implements OnInit{

  auto:Automovil | any ={};

  constructor(private autoService: Automovilservice, private ruta:ActivatedRoute){}

  ngOnInit(): void {

    this.ruta.params.subscribe(pars =>{
      if (pars ['id']){
        this.autoService.getAutomovilPorPlacas(pars['id']).subscribe(auto =>{this.auto = auto})
      }
    })
  }

}
