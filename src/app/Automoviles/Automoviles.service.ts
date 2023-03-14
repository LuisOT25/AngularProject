import { Injectable } from "@angular/core";
import { Automovil } from "./Automovil.model";
@Injectable({
  providedIn: "root"
})
export class Automovilservice {

  getAutomoviles() : Automovil[] {
    return [
      {
        placas:"PYQ1839",
        marca:"AAA",
        modelo:"AAA 2023",
        color:"Azul",
        kilometraje: 230
      },
      {
        placas:"RTQ1839",
        marca:"BBB",
        modelo:"BBB 2021",
        color:"Verde",
        kilometraje: 172
      }
    ];
  }
}
