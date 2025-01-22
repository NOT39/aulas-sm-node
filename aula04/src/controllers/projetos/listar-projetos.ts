import { Request, Response } from "express"
import { projetos } from "../../db"
import { InMemoryProjetosRepository } from "../../repositories/in-memory-projetos-repository"

export async function listarProjetos (req: Request, res: Response) {
    const { tituloContem, skip } = req.query

    const projetosRepository = new InMemoryProjetosRepository()
    
    const projetos = await projetosRepository.list()
    
    return res.json({
        projetos,
    })
}