// CRIE UM CÓDIGO TYPESCRIPT PARA GERENCIAR UMA EMPRESA.
// A EMPRESA DEVE SER UM OBJETO COM AS SEGUINTES PROPRIEDADES:
// 	- nome
// 	- cnpj
// 	- area
// 	- funcionarios

// CADA FUNCIONÁRIO DEVE SER UM OBJETO POSSUINDO AS SEGUINTES PROPRIEDADES:
// 	- nome
// 	- cpf
// 	- funcao
// 	- salario

// CRIE OS TIPOS PARA FUNCIONARIO E EMPRESA E GERE DUAS EMPRESAS COM 3 FUNCIONÁRIOS CADA.

type Funcionario = {
    nome: string
    cpf: string
    funcao: "Vendedor" | "Gerente" | "Estagiário"
    salario: number
}

type Empresa = {
    nome: string
    cnpj: string
    area: "Desenvolvimento de Software" | "Design" | "Marketing"
    funcionarios: Funcionario[]
}

const empresa1: Empresa = {
    nome: "Desenvolvimento Legal",
    cnpj: "00000000000000",
    area: "Desenvolvimento de Software",
    funcionarios: []
}

empresa1.funcionarios.push({
    nome: "Not",
    cpf: "12343211234",
    funcao: "Gerente",
    salario: 10000
})

empresa1.funcionarios.push({
    nome: "João",
    cpf: "00011122233",
    funcao: "Estagiário",
    salario: 2000
})

empresa1.funcionarios.push({
    nome: "Davi",
    cpf: "11122233344",
    funcao: "Gerente",
    salario: 5000
})

console.log(empresa1)