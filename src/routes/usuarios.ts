import { Router } from "express";
import { PrismaUsuariosRepository } from "../repositories/prisma-usuarios-repository";
import bcrypt from 'bcryptjs'

export const usuariosRouter = Router({})

usuariosRouter.get('/', async (req, res) => {
    const usuariosRepository = new PrismaUsuariosRepository()
    const usuarios = await usuariosRepository.list()

    return res.json({
        usuarios
    })
})

usuariosRouter.post('/', async (req, res) => {
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
})

usuariosRouter.put('/:id', async (req, res) => {
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
})

usuariosRouter.delete('/:id', async (req, res) => {
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
})