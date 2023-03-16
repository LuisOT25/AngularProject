import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Cliente } from "./client.model";

@Injectable({
  providedIn: 'root'
})
export class ClienteService{


  constructor(private http:HttpClient){}
  getClientes() : Observable<Cliente[]>
  {
    return this.http.get<Cliente[]>(environment.BACKEND_URL + '/clientes')
  }
}
