import { Prisma, Usuario } from "@prisma/client";
import { UsuariosRepository } from "./usuarios-repository";
import { prisma } from "../lib/prisma";

export class PrismaUsuariosRepository implements UsuariosRepository {
    async create(data: Prisma.UsuarioUncheckedCreateInput): Promise<Usuario> {
        const usuario = await prisma.usuario.create({
            data
        })

        return usuario
    }

    async list(): Promise<Usuario[]> {
        const usuarios = await prisma.usuario.findMany()

        return usuarios
    }

    async getById(id: number): Promise<Usuario | null> {
        const usuario = await prisma.usuario.findUnique({
            where: {
                id
            }
        })

        return usuario
    }

    async getByEmail(email: string): Promise<Usuario | null> {
        const usuario = await prisma.usuario.findUnique({
            where: {
                email
            }
        })

        return usuario
    }

    async update(id: number, data: Prisma.UsuarioUncheckedUpdateInput): Promise<Usuario> {
        const usuario = await prisma.usuario.update({
            where: {
                id
            },
            data
        })

        return usuario
    }

    async delete(id: number): Promise<Usuario> {
        const usuario = await prisma.usuario.delete({
            where: {
                id
            }
        })

        return usuario
    }

}