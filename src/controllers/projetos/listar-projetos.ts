import { Request, Response } from "express"
import { PrismaProjetosRepository } from "../../repositories/prisma-projetos-repository"

export async function listarProjetos(req: Request, res: Response) {
    const projetosRepository = new PrismaProjetosRepository()

    const projetos = await projetosRepository.list()

    return res.json({
        projetos,
    })
}