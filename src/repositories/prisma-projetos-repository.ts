import { Prisma, Projeto } from "@prisma/client";
import { ProjetosRepository } from "./projetos-repository";
import { prisma } from "../lib/prisma";

export class PrismaProjetosRepository implements ProjetosRepository {
    async create(data: Prisma.ProjetoUncheckedCreateInput): Promise<Projeto> {
        const projeto = await prisma.projeto.create({
            data
        })

        return projeto
    }

    async list(): Promise<Projeto[]> {
        const projetos = await prisma.projeto.findMany()

        return projetos
    }

    async getById(id: number): Promise<Projeto | null> {
        const projeto = await prisma.projeto.findUnique({
            where: {
                id
            }
        })

        return projeto
    }

    async update(id: number, data: Prisma.ProjetoUncheckedUpdateInput): Promise<Projeto> {
        const projeto = await prisma.projeto.update({
            where: {
                id
            },
            data
        })

        return projeto
    }

    async delete(id: number): Promise<Projeto> {
        const projeto = await prisma.projeto.delete({
            where: {
                id
            }
        })

        return projeto
    }

}