import { Projeto } from "../models/projeto"

export type CreateData = {
    titulo: string
    descricao: string
    fixado: boolean
}

export type UpdateData = {
    titulo?: string
    descricao?: string
    fixado?: boolean
}

export interface ProjetosRepository {
    create(data: CreateData): Promise<Projeto>
    list(): Promise<Projeto[]>
    getById(id: number): Promise<Projeto | null>
    update(id: number, data: UpdateData): Promise<Projeto>
    delete(id: number): Promise<Projeto>
}