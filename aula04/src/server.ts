import express from 'express'

type Projeto = {
    id: number
    titulo: string
    descricao: string
    fixado: boolean
}

const projetos: Projeto[] = [
    { id: 0, titulo: "Projeto 1", descricao: "Lorem ipsum", fixado: false },
    { id: 1, titulo: "Projeto 2", descricao: "Lorem ipsum", fixado: true }
]

const app = express()

app.use(express.json())

app.get('/', (_req, res) => {
    console.log("Rota / acessado")

    return res.send("Olá")
})

app.get('/projetos', (req, res) => {
    const { tituloContem, skip } = req.query

    let _projetos = projetos
    
    if (tituloContem) {
        _projetos = _projetos.filter((projeto) => {
            return projeto.titulo.includes(tituloContem as string)
        })
    }

    if (skip) {
        _projetos = _projetos.filter((projeto) => {
            return projeto.id > Number(skip)
        })
    }
    
    return res.json({
        projetos: _projetos,
    })
})

app.post('/projetos', (req, res) => {
    const { titulo, descricao } = req.body

    const projeto: Projeto = {
        titulo,
        descricao,
        id: projetos.length,
        fixado: false
    }
    
    projetos.push(projeto)

    return res.status(201).json({
        projeto
    })
})

app.put('/projetos/:id', (req, res) => {
    const { id } = req.params
    const { titulo, descricao } = req.body

    const projeto = projetos.find((projeto) => projeto.id === Number(id))

    if (!projeto) {
        return res.status(404).json({
            mensagem: "Projeto não encontrado."
        })
    }

    projeto.titulo = titulo || projeto.titulo
    projeto.descricao = descricao || projeto.descricao

    return res.json({
        projeto
    })
})

app.delete('/projetos/:id', (req, res) => {
    const { id } = req.params

    const indiceProjeto = projetos.findIndex((projeto) => projeto.id === Number(id))

    if (indiceProjeto < 0) {
        return res.status(404).json({
            mensagem: "Projeto não encontrado."
        })
    }

    projetos.splice(indiceProjeto, 1)

    return res.send()
})

const PORT = 3333

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})