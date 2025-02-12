import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import { projetosRouter } from './routes/projetos'
import { usuariosRouter } from './routes/usuarios'
import { authRouter } from './routes/auth'

export const app = express()

app.use(express.json())
app.use(cors({
    origin: ["*"]
}))



app.use("/projetos", projetosRouter)

app.use("/usuarios", usuariosRouter)

app.use("/auth", authRouter)