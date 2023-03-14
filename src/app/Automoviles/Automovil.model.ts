import { Cliente } from "./client.model"

export interface Automovil{
  placas:string,
  color:string,
  marca:string,
  modelo:string,
  kilometraje:number
  cliente?: Cliente
}
