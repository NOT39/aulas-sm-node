let minhaVariavel: string | number = "Esse é um texto"
minhaVariavel = "jojsad"

function contarCaracteres(texto: string) {
    return texto.length
}

type TextoOuNumero = string | number

let outraVariavel: TextoOuNumero = "jfodsjf"

type Funcionario = {
    nome: string
    cpf: string
    funcao: "Vendedor" | "Administrador" | "Gerente" | "Diretor",
    comissao?: number
}

const funcionario1: Funcionario = {
    nome: "Adriana Cotrim",
    cpf: "00011122233",
    funcao: "Gerente"
}

const funcionario2: Funcionario = {
    nome: "Rodrigo",
    cpf: "13254337632",
    funcao: "Vendedor",
    comissao: 432
}

type ChaveDeFenda = {
    material: string
    desparafusar: (parafuso: string) => void
}

type Martelo = {
    material: string,
    martelar: (prego: string) => void
}

type Mecanico<T = Martelo> = {
    nome: string,
    ferramenta: T,
    clientes?: string[]
}

const mecanico1: Mecanico<ChaveDeFenda> = {
    nome: "Not",
    ferramenta: {
        material: "Metal",
        desparafusar: (parafuso) => console.log(parafuso)
    }
}