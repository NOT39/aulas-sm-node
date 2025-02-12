import { Request, Response } from "express"
import bcrypt from 'bcryptjs'

import { PrismaUsuariosRepository } from "../../repositories/prisma-usuarios-repository"

export async function atualizarUsuario (req: Request, res: Response) {
    const { id } = req.params

    const { email, nome, senha } = req.body

    const usuariosRepository = new PrismaUsuariosRepository()

    const usuario = await usuariosRepository.getById(parseInt(id))

    if (!usuario) {
        return res.status(404).json({
            message: "Usuário não encontrado."
        })
    }

    if (email) {
        const usuarioComMesmoEmail = await usuariosRepository.getByEmail(email)

        if (usuarioComMesmoEmail) {
            return res.status(400).json({
                message: "Já existe um usuário cadastrado com o mesmo email."
            })
        }
    }

    const novoUsuario = {
        ...usuario,
        email: email || usuario.email,
        nome: nome || usuario.nome,
        hash_senha: senha ? await bcrypt.hash(senha, 6) : usuario.hash_senha,
    }

    const { hash_senha: _, ...usuarioAtualizado } = await usuariosRepository.update(parseInt(id), novoUsuario)

    return res.status(200).json({
        usuario: usuarioAtualizado
    })
}