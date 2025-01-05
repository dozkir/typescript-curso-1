export class Negociacao {
    
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaNegociacao(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g; // Expressão regular para todos os - (hífens) da string

        const date = new Date(dataString.replace(exp,',')); // A desgraça da data tem que entrar no formato 'YYYY,MM,DD', então usamos Regex.
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);

        return new Negociacao(date,quantidade,valor);
    }
}