import { Component, OnInit } from "@angular/core";
import { Automovil } from '../Automoviles/Automovil.model';
import { Automovilservice } from '../Automoviles/Automoviles.service';
import { Cliente } from '../Automoviles/client.model';
import { ClienteService } from '../Automoviles/clientes.service';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-formulario-automovil',
  templateUrl: './formulario-automovil.component.html',
  styleUrls: ['./formulario-automovil.component.css']
})
export class FormularioAutomovilComponent implements OnInit {

  constructor(private autoService:Automovilservice, private cliService:ClienteService ){}
  ngOnInit(): void {
    this.cliService.getClientes().subscribe( lista => {this.listaClientes = lista})
  }

  automovil:Automovil|any={}
  mensaje = ''
  idClienteSelection = -1
  listaClientes:Cliente[]=[]

  guardar(){
    this.automovil.cliente= {clienteId:1}
    this.autoService.crearAutomovil(this.automovil).subscribe({
      next: res => {
        console.log('creado', )
        this.mensaje = 'vehivulo creado'
        this.automovil = {}
        },

      error: err => console.log('ERROR', err)
    })
  }

}
