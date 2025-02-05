import { Request, Response } from "express"
import { PrismaProjetosRepository } from "../../repositories/prisma-projetos-repository"

export async function deletarProjeto(req: Request, res: Response) {
    const { id } = req.params

    const projetosRepository = new PrismaProjetosRepository()
    await projetosRepository.delete(Number(id))

    return res.send()
}