import { Request, Response } from "express"
import { PrismaProjetosRepository } from "../../repositories/prisma-projetos-repository"

export async function cadastrarProjeto(req: Request, res: Response) {
    const { titulo, descricao, usuarioId } = req.body

    const projetosRepository = new PrismaProjetosRepository()

    const projetoASerCriado = {
        titulo: titulo,
        descricao: descricao,
        fixado: false,
        usuarioId: parseInt(usuarioId)
    }

    const projeto = await projetosRepository.create(projetoASerCriado)

    return res.status(201).json({
        projeto
    })
}