import { app } from "./app"

const PORT = 3333

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})