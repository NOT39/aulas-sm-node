import { Request, Response } from "express"
import jwt from 'jsonwebtoken'

import { PrismaUsuariosRepository } from "../../repositories/prisma-usuarios-repository"

export async function refresh (req: Request, res: Response) {
    const { authorization } = req.headers

    const token = authorization?.split(' ')[1]

    if (!token) {
        return res.status(401).json({
            message: "Usuário não autenticado."
        })
    }

    const { sub } = jwt.verify(token, process.env.JWT_SECRET!)

    if (!sub) {
        return res.status(401).json({
            message: "Usuário não autenticado."
        })
    }

    const usuariosRepository = new PrismaUsuariosRepository()

    const usuario = await usuariosRepository.getById(parseInt(sub as string))

    if (!usuario) {
        return res.status(400).json({
            message: "Credenciais inválidas."
        })
    }

    const novoToken = jwt.sign({ sub: usuario.id }, process.env.JWT_SECRET!, {
        expiresIn: '7d'
    })

    return res.json({
        usuario: {
            ...usuario,
            hash_senha: undefined
        },
        token: novoToken
    })
}