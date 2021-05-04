import { Injectable } from '@angular/core';
 // tslint:disable: typedef
@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia;
  }

  adicionar(t: any){
    this.hidratar(t);
    this.listaTransferencia.push(t);
  }

  private hidratar(t: any){
    t.data = new Date();
  }

}
