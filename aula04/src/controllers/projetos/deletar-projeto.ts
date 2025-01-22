import { Request, Response } from "express"
import { projetos } from "../../db"

export function deletarProjeto (req: Request, res: Response) {
    const { id } = req.params

    const indiceProjeto = projetos.findIndex((projeto) => projeto.id === Number(id))

    if (indiceProjeto < 0) {
        return res.status(404).json({
            mensagem: "Projeto não encontrado."
        })
    }

    projetos.splice(indiceProjeto, 1)

    return res.send()
}