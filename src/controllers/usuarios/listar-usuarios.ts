import { Request, Response } from "express"
import { PrismaUsuariosRepository } from "../../repositories/prisma-usuarios-repository"

export async function listarUsuarios (req: Request, res: Response) {
    const usuariosRepository = new PrismaUsuariosRepository()
    const usuarios = await usuariosRepository.list()

    return res.json({
        usuarios
    })
}