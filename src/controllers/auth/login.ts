import { Request, Response } from "express"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import { PrismaUsuariosRepository } from "../../repositories/prisma-usuarios-repository"

export async function login(req: Request, res: Response) {
    const { email, senha } = req.body

    const usuariosRepository = new PrismaUsuariosRepository()

    const usuario = await usuariosRepository.getByEmail(email)

    if (!usuario) {
        return res.status(400).json({
            message: "Credenciais inválidas."
        })
    }

    const senhasIguais = await bcrypt.compare(senha, usuario.hash_senha)

    if (!senhasIguais) {
        return res.status(400).json({
            message: "Credenciais inválidas."
        })
    }

    const token = jwt.sign({ sub: usuario.id }, process.env.JWT_SECRET!, {
        expiresIn: '7d'
    })

    return res.json({
        usuario: {
            ...usuario,
            hash_senha: undefined
        },
        token
    })
}