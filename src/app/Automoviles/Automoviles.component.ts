import { Component, OnInit } from "@angular/core";
import { Automovil } from "./Automovil.model";
import { Automovilservice } from "./Automoviles.service";

@Component({
  selector: "app-ejemplo",
  templateUrl: "./Automoviles.component.html"
})
export class Automoviles implements OnInit{

  listaAtumoviles: Automovil[] = [];
  constructor(private autoService:Automovilservice){

  }
  ngOnInit(): void {

    this.autoService.getAutomoviles().subscribe(lista=>{
      console.log('LISTA', lista)
      this.listaAtumoviles = lista
    })
    console.log('DESPUES DE SUSCRIBE')
  }

}
