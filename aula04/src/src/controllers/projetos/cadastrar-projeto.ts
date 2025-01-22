import { Request, Response } from "express"
import { projetos } from "../../db"
import { Projeto } from "../../models/projeto"
import { InMemoryProjetosRepository } from "../../repositories/in-memory-projetos-repository"

export async function cadastrarProjeto (req: Request, res: Response) {
    const { titulo, descricao } = req.body

    const projetosRepository = new InMemoryProjetosRepository()

    const projetoASerCriado = {
        titulo,
        descricao,
        fixado: false
    }

    const projeto = await projetosRepository.create(projetoASerCriado)

    return res.status(201).json({
        projeto
    })
}