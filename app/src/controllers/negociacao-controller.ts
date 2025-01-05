import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { DiasDaSemana } from "../enums/dia-da-semana.js";

import { MensagemView } from "../views/mensagem-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.inputData          = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade    = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor         = document.querySelector('#valor') as HTMLInputElement;
        
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {

        // Criando negociação
        const negociacao = Negociacao.criaNegociacao(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        // Validando negociacao
        if(!this.ehDiaUtil(negociacao.data)){
            this.mensagemView.update('Somente negociações em dias úteis, por favor!');
            return;
        }

        this.negociacoes.adiciona(negociacao);
        console.log('>>> Negociações: ', this.negociacoes.lista());

        this.limparFormulario();
        this.atualizaView();
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        this.inputData.focus();
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!'); // Deixar esse por último.
    }

    private ehDiaUtil(date: Date): boolean {
        return date.getDay() > DiasDaSemana.DOMINGO && date.getDay() < DiasDaSemana.SABADO;
    }
}