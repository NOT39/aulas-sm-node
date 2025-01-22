import { projetos } from "../db"
import { Projeto } from "../models/projeto"
import { CreateData, ProjetosRepository } from "./projetos-repository"

export class InMemoryProjetosRepository implements ProjetosRepository {
    async create(data: CreateData): Promise<Projeto> {
        const projeto: Projeto = {
            id: projetos[projetos.length - 1].id + 1,
            ...data
        }
        
        projetos.push(projeto)

        return projeto
    }

    async list(): Promise<Projeto[]> {
        return projetos
    }

    async getById(id: number): Promise<Projeto | null> {
        const projeto = projetos.find(projeto => projeto.id === id) || null

        return projeto
    }

}