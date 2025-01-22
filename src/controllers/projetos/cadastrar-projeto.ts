import { Request, Response } from "express"
import { projetos } from "../../db"
import { Projeto } from "../../models/projeto"
import { InMemoryProjetosRepository } from "../../repositories/in-memory-projetos-repository"

export function cadastrarProjeto (req: Request, res: Response) {
    const { titulo, descricao } = req.body

    const projetosRepository = new InMemoryProjetosRepository()

    const projeto = {
        titulo,
        descricao,
        fixado: false
    }

    projetosRepository.create(projeto)

    return res.status(201).json({
        projeto
    })
}