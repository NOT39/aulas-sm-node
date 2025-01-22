import express from 'express'
import { projetosRouter } from './routes/projetos'
import { testeRouter } from './routes/teste'

export const app = express()

app.use(express.json())

app.use('/', testeRouter)

app.use("/projetos", projetosRouter)
