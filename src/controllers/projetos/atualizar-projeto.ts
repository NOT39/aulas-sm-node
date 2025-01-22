import { Request, Response } from "express"
import { projetos } from "../../db"
import { InMemoryProjetosRepository } from "../../repositories/in-memory-projetos-repository"

export async function atualizarProjeto (req: Request, res: Response) {
    const { id } = req.params
    const { titulo, descricao } = req.body

    const projetosRepository = new InMemoryProjetosRepository()

    const projeto = await projetosRepository.getById(Number(id))

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
}