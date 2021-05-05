import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from 'src/models/transferencia.model';
import { Observable } from 'rxjs';
 // tslint:disable: typedef
@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private client: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]>{
    return this.client.get<Transferencia[]>(this.url);
  }

  adicionar(t: Transferencia): Observable<Transferencia> {
    this.hidratar(t);
    return this.client.post<Transferencia>(this.url, t);
  }

  private hidratar(t: any){
    t.data = new Date();
  }

}
