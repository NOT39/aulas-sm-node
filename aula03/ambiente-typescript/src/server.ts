import express from 'express'

const app = express()

app.get('/', (req, res) => {
    return res.status(200).send("Olá mundo")
})

app.get('/exemplo', (req, res) => {
    return res.status(200).send("<h1>Rota exemplo</h1>")
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})