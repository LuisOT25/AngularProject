import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Automovil } from "./Automovil.model";
import { Automovilservice } from "./Automoviles.service";

@Component({
  selector: "app-ejemplo",
  templateUrl: "./Automoviles.component.html"
})
export class Automoviles implements OnInit{

  listaAtumoviles: Automovil[] = [];
  constructor(private autoService:Automovilservice, private router:Router){

  }
  ngOnInit(): void {

    this.autoService.getAutomoviles().subscribe(lista=>{
      console.log('LISTA', lista)
      this.listaAtumoviles = lista
    })
    console.log('DESPUES DE SUSCRIBE')
  }

  verDetalle(placas:string){
    this.router.navigate(['/automoviles',placas])
  }

}
