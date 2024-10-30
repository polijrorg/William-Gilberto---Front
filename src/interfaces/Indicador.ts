interface Nota {
    number1?: string;
    number2?: string;
    type: string;
}

export default interface Indicador {
    id?: string,
    name: string,
    nota1?: Nota;
    nota2?: Nota;
    nota3?: Nota;
}