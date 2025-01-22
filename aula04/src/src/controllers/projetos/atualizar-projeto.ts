import { Request, Response } from "express"
import { projetos } from "../../db"
import { InMemoryProjetosRepository } from "../../repositories/in-memory-projetos-repository"

export async function atualizarProjeto (req: Request, res: Response) {
    const { id } = req.params
    const { titulo, descricao } = req.body

    const projetosRepository = new InMemoryProjetosRepository()

    const projeto = await projetosRepository.update(Number(id), {
        titulo,
        descricao
    })
    
    return res.json({
        projeto
    })
}