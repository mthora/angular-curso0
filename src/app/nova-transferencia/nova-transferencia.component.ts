import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: string | number;

  constructor(private service: TransferenciaService, private router:Router ){}

  transferir(): void{

    // tslint:disable-next-line: deprecation
    this.service.adicionar({valor: this.valor, destino: this.destino}).subscribe(
      (res) => {
      console.log(res);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    }, (err) => {
      console.log(err);
    });
  }

  limparCampos(): void{

    this.valor = 0;
    this.destino = 0;
  }

}
