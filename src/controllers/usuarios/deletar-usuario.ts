import { Request, Response } from "express"
import { PrismaUsuariosRepository } from "../../repositories/prisma-usuarios-repository"

export async function deletarUsuario (req: Request, res: Response) {
    const { id } = req.params

    const usuariosRepository = new PrismaUsuariosRepository()

    const usuario = await usuariosRepository.getById(parseInt(id))

    if (!usuario) {
        return res.status(404).json({
            message: "Usuário não encontrado."
        })
    }

    const usuarioDeletado = await usuariosRepository.delete(parseInt(id))

    return res.status(204).json()
}