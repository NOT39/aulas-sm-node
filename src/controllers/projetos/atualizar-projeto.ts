import { Request, Response } from "express"
import { PrismaProjetosRepository } from "../../repositories/prisma-projetos-repository"

export async function atualizarProjeto (req: Request, res: Response) {
    const { id } = req.params
    const { titulo, descricao } = req.body

    const projetosRepository = new PrismaProjetosRepository()

    const projeto = await projetosRepository.update(Number(id), {
        titulo,
        descricao
    })
    
    return res.json({
        projeto
    })
}