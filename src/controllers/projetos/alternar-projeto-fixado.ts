import { Request, Response } from "express"
import { projetos } from "../../db"

export function alterarProjetoFixado(req: Request, res: Response) {
    const { id } = req.params

    const projeto = projetos.find((projeto) => projeto.id === parseInt(id))

    if (!projeto) {
        return res.status(404).json({
            mensagem: "O projeto informado não foi encontrado."
        })
    }

    projeto.fixado = !projeto.fixado

    return res.json(projeto)
}