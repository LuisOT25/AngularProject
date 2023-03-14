import { Component } from '@angular/core';
import { Automovil } from '../Automoviles/Automovil.model';
import { Automovilservice } from '../Automoviles/Automoviles.service';

@Component({
  selector: 'app-formulario-automovil',
  templateUrl: './formulario-automovil.component.html',
  styleUrls: ['./formulario-automovil.component.css']
})
export class FormularioAutomovilComponent {

  constructor(private autoService:Automovilservice){}

  automovil:Automovil|any={}

  guardar(){
    this.automovil.cliente= {clienteId:1}
    this.autoService.crearAutomovil(this.automovil).subscribe({
      next: res => console.log('creado', ),
      error: err => console.log('ERROR', err)
    })
  }

}
