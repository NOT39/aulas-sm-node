import { projetos } from "../db"
import { ProjetosRepository } from "./projetos-repository"

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

    async update(id: number, data: UpdateData): Promise<Projeto> {
        const projeto = projetos.find(projeto => projeto.id === id)

        if (!projeto) {
            throw new Error("Projeto não encontrado")
        }

        const projetoAtualizado = {
            ...projeto,
            ...data
        }

        return projetoAtualizado
    }

    async delete(id: number): Promise<Projeto> {
        throw new Error("Method not implemented.")
    }


}