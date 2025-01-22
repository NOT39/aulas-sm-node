import { Request, Response } from "express"
import { InMemoryProjetosRepository } from "../../repositories/in-memory-projetos-repository"

export async function alterarProjetoFixado(req: Request, res: Response) {
    const { id } = req.params

    const projetosRepository = new InMemoryProjetosRepository()

    const projeto = await projetosRepository.update(Number(id), {
        fixado: true
    })

    return res.json(projeto)
}