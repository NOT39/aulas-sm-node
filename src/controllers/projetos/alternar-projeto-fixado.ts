import { Request, Response } from "express"
import { PrismaProjetosRepository } from "../../repositories/prisma-projetos-repository"

export async function alterarProjetoFixado(req: Request, res: Response) {
    const { id } = req.params

    const projetosRepository = new PrismaProjetosRepository()

    const projeto = await projetosRepository.update(Number(id), {
        fixado: true
    })

    return res.json(projeto)
}