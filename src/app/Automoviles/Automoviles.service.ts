import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Automovil } from "./Automovil.model";
@Injectable({
  providedIn: "root"
})
export class Automovilservice {

  BACKEND_URL = 'http://localhost:8080'
  constructor(private http:HttpClient){}

  getAutomoviles() : Observable<Automovil[]> {
    return this.http.get<Automovil[]>(this.BACKEND_URL+'/vehiculos')
    /*return of([
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
    ]);*/
  }

  getAutomovilPorPlacas(placas:String): Observable<Automovil>
  {
    return this.http.get<Automovil>(this.BACKEND_URL+'/vehiculos/'+placas)
  }

  crearAutomovil(auto:Automovil): Observable<Automovil>
  {
    return this.http.post<Automovil>(this.BACKEND_URL+'/vehiculos', auto)
  }

}
