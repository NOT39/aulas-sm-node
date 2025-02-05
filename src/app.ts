import 'dotenv/config'

import express from 'express'
import { projetosRouter } from './routes/projetos'
import { testeRouter } from './routes/teste'
import { usuariosRouter } from './routes/usuarios'
import { authRouter } from './routes/auth'

export const app = express()

app.use(express.json())

app.use('/', testeRouter)

app.use("/projetos", projetosRouter)

app.use("/usuarios", usuariosRouter)

app.use("/auth", authRouter)