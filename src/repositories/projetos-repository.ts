import { Prisma, Projeto } from "@prisma/client"

export interface ProjetosRepository {
    create(data: Prisma.ProjetoUncheckedCreateInput): Promise<Projeto>
    list(): Promise<Projeto[]>
    getById(id: number): Promise<Projeto | null>
    update(id: number, data: Prisma.ProjetoUncheckedUpdateInput): Promise<Projeto>
    delete(id: number): Promise<Projeto>
}