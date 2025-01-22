import { Request, Response } from "express"
import { projetos } from "../../db"
import { InMemoryProjetosRepository } from "../../repositories/in-memory-projetos-repository"

export async function deletarProjeto (req: Request, res: Response) {
    const { id } = req.params

    const projetosRepository = new InMemoryProjetosRepository()
    await projetosRepository.delete(Number(id))

    return res.send()
}