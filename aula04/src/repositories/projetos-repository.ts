import { Projeto } from "../models/projeto"

export type CreateData = {
    titulo: string
    descricao: string
    fixado: boolean
}

export interface ProjetosRepository {
    create(data: CreateData): Promise<Projeto>
    list(): Promise<Projeto[]>
    getById(id: number): Promise<Projeto | null>
}