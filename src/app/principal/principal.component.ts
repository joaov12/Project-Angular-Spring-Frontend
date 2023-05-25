import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClientecService } from '../servico/clientec.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  //Objeto do tipo Cliente
  cliente = new Cliente();


  // Variável para visibilidade dos botões
  btnCadastro: boolean = true;

  //JSON de clientes
  clientes: Cliente[] = [];

  // Construtor
  constructor(private servico: ClientecService) {

  }

  // Método de seleção
  selecionar(): void {
    this.servico.selecionar().subscribe(retorno => this.clientes = retorno);
  }


  // Método de cadastro
  cadastrar(): void {
    this.servico.cadastrar(this.cliente)
      .subscribe(retorno => {

        // Cadastrar o cliente no vetor
        this.clientes.push(retorno);

        // Limpar formulário
        this.cliente = new Cliente();

        // Mensagem
        alert('Cliente cadastrado com sucesso!');
      });
  }


  // Método de inicialização
  ngOnInit() {
    this.selecionar();
  }

}
