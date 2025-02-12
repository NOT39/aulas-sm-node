import { Request, Response } from "express"
import bcrypt from 'bcryptjs'
import { PrismaUsuariosRepository } from "../../repositories/prisma-usuarios-repository"

export async function registrarUsuario (req: Request, res: Response) {
    const { email, nome, senha } = req.body

    const usuariosRepository = new PrismaUsuariosRepository()

    const usuarioComMesmoEmail = await usuariosRepository.getByEmail(email)

    if (usuarioComMesmoEmail) {
        return res.status(400).json({
            message: "Já existe um usuário cadastrado com o mesmo email."
        })
    }

    const { hash_senha, ...usuario } = await usuariosRepository.create({
        email,
        nome,
        hash_senha: await bcrypt.hash(senha, 6)
    })

    return res.status(201).json({
        usuario
    })
}