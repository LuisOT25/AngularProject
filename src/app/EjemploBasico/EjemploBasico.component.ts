import { Component } from "@angular/core";

@Component({
    selector: "app-ejemplo",
    templateUrl: "./EjemploBasico.component.html"
})
export class EjemploBasico{
    mensaje:string = "Hello world";
    numero:number = 23828928932897;
    datos:string[] = ["a","B","pokwjodjodjodwoi"];
    contador:number=0;

    incrementarContador(){
      console.log("Incrementar "+this.contador)
      this.contador=this.contador+2;
    }

    decrementarContador(){
      this.contador--;
    }
}
