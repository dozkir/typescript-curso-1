import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao> {
    
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    public static criaNegociacao(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g; // Expressão regular para todos os - (hífens) da string

        const date = new Date(dataString.replace(exp,',')); // A desgraça da data tem que entrar no formato 'YYYY,MM,DD', então usamos Regex.
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);

        return new Negociacao(date,quantidade,valor);
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public paraTexto(): string {
        return  `
            Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
            Volume: ${this.volume}
        `;
    }

    public ehIgual(negociacao: Negociacao): boolean{
        return this.data.getDate() == negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getFullYear() == negociacao.data.getFullYear();
    }
}